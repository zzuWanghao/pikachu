import string from './css'

const player = {
    n:1,
    time : 50,
    id:undefined,
    ui:{
         demo : document.querySelector('#demo'),
         demo2 : document.querySelector('#demo2')
    },
    init :()=>{
        player.ui.demo.innerText = string.substr(0,  player.n)
        player.ui.demo2.innerHTML = string.substr(0,  player.n)
        player.play()
        player.bindEvents()

    },
     events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents :()=>{

        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
            document.querySelector(key).onclick = player[player.events[key]];
        }
        }
    },

    run: () => {
        player.n =  player.n + 1
        if ( player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo.innerText = string.substr(0,  player.n)
        player.ui.demo2.innerHTML = string.substr(0,  player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;

    },
    play:()=> {
        player.id=setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 100
         player.play()
    },
    normal: () => {
        player.pause()
        player.time = 50
      player.play()
    },
    fast: () => {
        player.pause()
        player.time = 10
        player.play()
    }
}
player.init();

