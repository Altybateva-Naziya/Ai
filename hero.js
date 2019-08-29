const hero = {
    'idle': {
        1: 'image/hero/idle/hi1.png',
        2: 'image/hero/idle/hi2.png',
        3: 'image/hero/idle/hi3.png',
        4: 'image/hero/idle/hi4.png',
        5: 'image/hero/idle/hi5.png',
        6: 'image/hero/idle/hi6.png',
        7: 'image/hero/idle/hi7.png',
        8: 'image/hero/idle/hi8.png',
        9: 'image/hero/idle/hi9.png'
    },
    
    'movie': {
        1: 'image/hero/movie/hiro10.png',
        2: 'image/hero/movie/hiro11.png',
        3: 'image/hero/movie/hiro12.png',
        4: 'image/hero/movie/hiro13.png',
        5: 'image/hero/movie/hiro14.png',
        6: 'image/hero/movie/hiro15.png',
        7: 'image/hero/movie/hiro16.png'
    },
    'attack': {
        1: 'image/hero/attack/1.png',
        2: 'image/hero/attack/2.png',
        3: 'image/hero/attack/2.png',
        4: 'image/hero/attack/4.png',
        5: 'image/hero/attack/5.png',
        6: 'image/hero/attack/6.png',
        7: 'image/hero/attack/7.png',
        8: 'image/hero/attack/8.png',
        9: 'image/hero/attack/9.png',
        10: 'image/hero/attack/10.png'
    },
     'dead': {
        1: 'image/hero/dead/hiro20.png',
        2: 'image/hero/dead/hiro21.png',
        3: 'image/hero/dead/hiro22.png',
        4: 'image/hero/dead/hiro23.png',
        5: 'image/hero/dead/hiro24.png',
        6: 'image/hero/dead/hiro25.png',
        7: 'image/hero/dead/hiro26.png',
        8: 'image/hero/dead/hiro27.png',
        9: 'image/hero/dead/hiro28.png',
        10: 'image/hero/dead/hiro29.png'
    }
}
export let type = 'idle'
export let ready = false
export function setType(type1) {
    type=type1
}
export function setframe(frame1) {
    frame=frame1
}
let frame = 1
export function drawImagehero(ctx) {
    frame +=1
    if (type === 'attack' && frame=== 10){
        type='idle'
        frame=1
    }
    if (hero[type][frame]=== undefined)
        frame = 1

    ctx.drawImage(hero[type][frame], 0, 0);

}

export function preload() {
    let types = Object.keys(hero)
    types.forEach(function (type, idx) {
        let frames = Object.keys(hero[type])
        frames.forEach(function (frame, idx1) {
            const image = new Image(58, 84);
            image.onload = function () {
                hero[type][frame] = image;
                if(idx === types.length-1 && idx1 === frames.length-1)
                    ready = true

            }
            image.src = hero[type][frame];
        })
    })
}