//js/index.js
import * as hero from './hero.js'
let listener = new window.keypress.Listener();
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

window.onload=async function () {
    preload()
    setInterval(function () {
        if (hero.ready === true)
            document.getElementById('1').style.display = "none"
            draw()
}, 110)
}

function preload() {
    document.getElementById('1').style.display = "block"
    hero.preload()
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
        if (!['attack',  'dead'].includes(hero.type))
            hero.setType('movie')
    },
    "on_keyup"          : function() {
        if (!['attack', 'dead'].includes(hero.type))
            hero.setType('idle')

    }
});
listener.register_combo({
    "keys"              : "space",
    "on_keydown"        : function() {
        if (!['attack', 'movie', 'dead'].includes(hero.type)){
             hero.setType('attack')
            hero.setframe(1)
        }
    }
});