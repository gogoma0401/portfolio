/*타이핑스크립트*/

const content = "끈기와 책임감으로, \n 사회적가치를 \n 창출하는 \n 웹 퍼블리셔!";
const text = document.querySelector(".text");
let i = 0;

function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)

$(function () {
    $("main .information").click(function () {
        $(".project1").toggle();
    });
});




