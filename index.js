//js/index.js
import * as hero from './hero.js'
let listener = new window.keypress.Listener();
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

window.onload=function () {

    setInterval(function () {
        draw()
}, 100)
}
function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    hero.drawImagehero(ctx)
}
function move() {
     ctx.clearRect(0, 0, c.width, c.height);
    hero.drawImagehiro()
}

listener.register_combo({
    "keys"              : "right",
    "on_keydown"        : function() {
        hero.setType('movie')
    },
    "on_keyup"          : function() {
        hero.setType('idle')
    }
});
