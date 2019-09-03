//js/index.js
import * as fireball from './fireball.js'
import * as hero from './hero.js'
let listener = new window.keypress.Listener();
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

window.onload=async function () {
    preload()
    setInterval(function () {
        if (hero.ready === true && fireball.ready===true)
            document.getElementById('1').style.display = "none"
            draw()
}, 110)}
function preload() {
    document.getElementById('1').style.display = "block"
    hero.preload()
    fireball.preload()
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    hero.drawImagehero(ctx)
    fireball.drawF(ctx)
}
function move() {
     ctx.clearRect(0, 0, c.width, c.height);
    hero.drawImagehiro()
}
listener.register_combo({
    "keys"              : "right",
    "on_keydown"        : function() {
        if (!['attack',  'dead'].includes(hero.type)){
            hero.setType('movie')
            hero.setdirect('right')
             document.getElementById('9').play()
        }
    },
    "on_keyup"          : function() {
        if (!['attack', 'dead'].includes(hero.type))
            hero.setType('idle')
         document.getElementById('9').pause()
    }
});
listener.register_combo({
    "keys"              : "left",
    "on_keydown"        : function() {
        if (!['attack',  'dead'].includes(hero.type))
            hero.setType('movel')
        hero.setdirect('left')
         document.getElementById('9').play()
    },
    "on_keyup"          : function() {
        if (!['attack', 'dead'].includes(hero.type))
            hero.setType('idlel')
        document.getElementById('9').pause()
    }
});
listener.register_combo({
    "keys"              : "space",
    "on_keydown"        : function() {
        if (!['attack', 'movie', 'dead'].includes(hero.type)){
            if (hero.direct === 'right'){
                hero.setType('attack')

            setTimeout(function () {
                document.getElementById('8').play()
            fireball.setxy(hero.x+40, hero.y+30)
            },500)
            }
            else if (hero.direct === 'left'){
                hero.setType('angriff')
            setTimeout(function () {
                document.getElementById('8').play()
            fireball.setxy(hero.x-40, hero.y+30)
            },500)
            }
            fireball.setdirectfireball(hero.direct)
            hero.setframe(1)

        }
    }
});