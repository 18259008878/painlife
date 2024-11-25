var a_idx = 0;

function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
jQuery(document).ready(function ($) {
    let i = 0; // 定义获取词语下标

    $("body").click(function (e) {
        let a = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"]; // 需要显示的词语
        let $i = $("<span/>").text(a[(i++) % a.length]); // 设置词语给span标签
        let x = e.pageX;
        let y = e.pageY; // 获取x和y的指针坐标

        $i.css({
            "z-index": 9999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`
        });

        $("body").append($i);

        // Animate the span element
        $i.animate({
            "top": y - 180,
            "opacity": 0
        }, 1500, function () {
            $i.remove(); // Remove the element after animation completes
        });
    });
});
