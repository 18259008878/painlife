---
icon: fa-brands fa-java
date: 2024-11-27
category:
  - java
  - jwt
---

# JWT的粗略实现

废话不多说，直接上代码

## 代码实现

```java
@Component
public class JWTUtil {
    private static final String SECRET_KEY = "abcdefghijklmnopqrstuvwxyz";
    private static final long EXPIRATION_TIME = 1000 * 60 * 15; // 15 minutes
    private static final long REFRESH_TIME = 1000 * 60 * 60 * 24 * 7; // 7 day

    /**
     * 生成token
     * @param key token中包含的信息(比如说用户的手机号)
     * @return token
     */
    public static String generateToken(String key) {
        return Jwts.builder()
                .setSubject(key)
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    /**
     * 生成refreshToken 时间更长 更不容易过期
     * @param key token中包含的信息(比如说用户的手机号)
     * @return token
     */
    public static String generateRefreshToken(String key) {
        return Jwts.builder()
                .setSubject(key)
                .setExpiration(new Date(System.currentTimeMillis() + REFRESH_TIME))
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    /**
     * 解析token
     * @param token 需要解析的token
     * @return claims
     */
    public static Claims extractClaims(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (JwtException e) {
            return null; // 过期的token直接返回null
        }
    }

    /**
     * 获取token中包含的信息
     * @param token 需要解析的token
     * @return token中包含的信息
     */
    public static String extractKey(String token) {
        Claims claims = extractClaims(token);
        return claims != null ? claims.getSubject() : null;
    }

    /**
     * 判断token是否过期
     * @param token 待验证的token
     * @return {@code true}表示过期 {@code false}表示未过期
     */
    public static boolean isTokenExpired(String token) {
        Claims claims = extractClaims(token);
        return (claims != null && claims.getExpiration().before(new Date())) || claims == null;
    }

    /**
     * 验证token合法性
     * @param token 待验证的token
     * @param key 用户信息
     * @return {@code true}表示合法 {@code false}表示不合法
     */
    public static boolean validateToken(String token, String key) {
        String extractedKey = extractKey(token);
        return extractedKey != null && extractedKey.equals(key) && !isTokenExpired(token);
    }

}
```

上述代码是一个简单的JWT工具类，其中包含了生成token、解析token、验证token等方法。需要注意的是，这里的SECRET_KEY是一个固定的字符串，实际应用中应该使用更安全的密钥。另外，这里的EXPIRATION_TIME和REFRESH_TIME也是固定的，实际应用中应该根据需求进行调整。

## 拦截器实现

既然有了token，那么肯定要有拦截器

拦截器定义如下（使用双token）

::: warning
建议对浏览器预检请求做处理
:::

```java
@Component
public class LoginInterceptor implements HandlerInterceptor {

    /**
     * 在请求处理之前进行拦截
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // **注意排除预检请求**
        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
            response.setStatus(HttpServletResponse.SC_OK);
            return false;
        }

        String accessToken = request.getHeader("Authorization");
        String refreshToken = request.getHeader("Refresh-Token");

        boolean accessTokenValid = false;
        boolean refreshTokenValid = false;

        // 验证 Access Token
        if (accessToken != null && accessToken.startsWith("Bearer ")) {
            accessToken = accessToken.substring(7);
            accessTokenValid = !JWTUtil.isTokenExpired(accessToken);
        }

        // 验证 Refresh Token
        if (refreshToken != null && !refreshToken.isEmpty()) {
            refreshTokenValid = !JWTUtil.isTokenExpired(refreshToken);
        }

        // 如果 Access Token 有效，继续请求
        if (accessTokenValid) {
            return true;
        }

        // 如果 Access Token 无效但 Refresh Token 有效，尝试刷新 Access Token
        if (!accessTokenValid && refreshTokenValid) {
            String key = JWTUtil.extractKey(refreshToken); // 从 refreshToken 中提取用户信息
            String newAccessToken = JWTUtil.generateToken(key); // 生成新的 Access Token

            response.setHeader("New-Access-Token", newAccessToken);
            return true;
        }

        // 两个 Token 都无效，返回401状态
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write("{\"code\": 1, \"message\": \"invalid token\", \"data\": null}");
        return false;
    }
}
```

然后是注册拦截器

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private LoginInterceptor loginInterceptor;

    /**
     * 添加拦截器
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // excludePathPatterns() 用于排除你不想要排除的路径
        registry.addInterceptor(loginInterceptor)
                .excludePathPatterns(
                        "/api/login/**",
                        "/api/register/**",
                        "/api/refresh/**",
                        "/doc.html",
                        "/webjars/**",
                        "/v3/api-docs/swagger-config",
                        "/v3/api-docs/**",
                        "/swagger-ui/index.html",
                        "swagger-ui.html"
                );
    }

    /**
     * 静态资源映射
     *
     */
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("doc.html").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/favicon.ico").addResourceLocations("classpath:/META-INF/resources/");
        registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
    }
}
```

这样就大功告成了！！

## 总结

通过上述步骤，我们实现了一个简单的 JWT 认证机制，并在 Spring Boot 项目中进行了集成。通过拦截器对请求进行拦截，验证 JWT 的有效性，并在需要时刷新 JWT。这样，我们就可以在项目中使用 JWT 来保护 API 的安全性了。
