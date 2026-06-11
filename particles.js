tsParticles.load("particles", {

    background:{
        color:"transparent"
    },

    fpsLimit:60,

    particles:{
        number:{
            value:60
        },

        color:{
            value:[
                "#ffd86b",
                "#fff1b0",
                "#ffffff"
            ]
        },

        shape:{
            type:"circle"
        },

        opacity:{
            value:{min:0.2,max:0.8}
        },

        size:{
            value:{min:1,max:4}
        },

        move:{
            enable:true,
            speed:0.8
        },

        links:{
            enable:false
        }
    }
});