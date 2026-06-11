const themeMusic = new Howl({
    src:["assets/music/theme.mp3"],
    loop:true,
    volume:0.4
});

const pageFlipSound = new Howl({
    src:["assets/music/page-flip.mp3"],
    volume:0.7
});

function startMusic(){
    if(!themeMusic.playing()){
        themeMusic.play();
    }
}