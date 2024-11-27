import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as t,o as s}from"./app-YD8uYA9g.js";const n={};function l(r,i){return s(),a("div",null,i[0]||(i[0]=[t(`<h1 id="关于java读取数据库的时区问题" tabindex="-1"><a class="header-anchor" href="#关于java读取数据库的时区问题"><span>关于Java读取数据库的时区问题</span></a></h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>我的MySQL是通过压缩包安装的，也配置了my.ini文件</p><p>配置如下</p><div class="language-ini line-numbers-mode" data-highlighter="shiki" data-ext="ini" data-title="ini" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">default-time_zone</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;+8:00&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以看到我配置了时区，然后我在数据库中访问时间戳也是正常的，但是当我通过Java访问数据库的时候，时间戳并没有加8个小时，而是显示的是0时区的时间。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">JsonFormat</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">timezone</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;GMT+8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Timestamp</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> createAt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在实体类中，将时间戳字段加上这个注解，就可以解决时区问题。</p>`,9)]))}const p=e(n,[["render",l],["__file","关于Java读取数据库的时区问题.html.vue"]]),o=JSON.parse(`{"path":"/technology/backend/%E5%85%B3%E4%BA%8EJava%E8%AF%BB%E5%8F%96%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E6%97%B6%E5%8C%BA%E9%97%AE%E9%A2%98.html","title":"关于Java读取数据库的时区问题","lang":"zh-CN","frontmatter":{"icon":"fa-solid fa-database","date":"2024-11-27T00:00:00.000Z","category":["数据库"],"tag":["时区问题"],"description":"关于Java读取数据库的时区问题 前言 我的MySQL是通过压缩包安装的，也配置了my.ini文件 配置如下 可以看到我配置了时区，然后我在数据库中访问时间戳也是正常的，但是当我通过Java访问数据库的时候，时间戳并没有加8个小时，而是显示的是0时区的时间。 解决方案 在实体类中，将时间戳字段加上这个注解，就可以解决时区问题。","head":[["meta",{"property":"og:url","content":"https://18259008878.github.io/painlife/painlife/technology/backend/%E5%85%B3%E4%BA%8EJava%E8%AF%BB%E5%8F%96%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E6%97%B6%E5%8C%BA%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"\\"极乐\\"人生"}],["meta",{"property":"og:title","content":"关于Java读取数据库的时区问题"}],["meta",{"property":"og:description","content":"关于Java读取数据库的时区问题 前言 我的MySQL是通过压缩包安装的，也配置了my.ini文件 配置如下 可以看到我配置了时区，然后我在数据库中访问时间戳也是正常的，但是当我通过Java访问数据库的时候，时间戳并没有加8个小时，而是显示的是0时区的时间。 解决方案 在实体类中，将时间戳字段加上这个注解，就可以解决时区问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-27T01:09:38.000Z"}],["meta",{"property":"article:tag","content":"时区问题"}],["meta",{"property":"article:published_time","content":"2024-11-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-27T01:09:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"关于Java读取数据库的时区问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-27T01:09:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Carmen\\",\\"url\\":\\"https://gitee.com/Q_of_Git\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1732669778000,"updatedTime":1732669778000,"contributors":[{"name":"Carmen","email":"2942173241@qq.com","commits":1}]},"readingTime":{"minutes":0.55,"words":165},"filePathRelative":"technology/backend/关于Java读取数据库的时区问题.md","localizedDate":"2024年11月27日","excerpt":"\\n<h2>前言</h2>\\n<p>我的MySQL是通过压缩包安装的，也配置了my.ini文件</p>\\n<p>配置如下</p>\\n<div class=\\"language-ini line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ini\\" data-title=\\"ini\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#C678DD\\">default-time_zone</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">'+8:00'</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,o as data};
