let pageFlip;

const closedBook =
document.getElementById("book-closed");

const intro =
document.getElementById("intro");

const wrapper =
document.getElementById("book-wrapper");

closedBook.addEventListener(
"click",
openBook
);

function openBook(){

    gsap.to(".cover-front",{
        rotateY:-160,
        duration:1.4,
        ease:"power3.inOut"
    });

    gsap.to("#intro",{
        opacity:0,
        duration:1.5,
        delay:0.6,

        onComplete(){

            intro.style.display="none";

            wrapper.style.visibility="visible";

            gsap.to(wrapper,{
                opacity:1,
                duration:1
            });

            initializeBook();

            startMusic();
        }
    });
}

function initializeBook(){

    const book =
    document.getElementById("book");

    const pageElements = [];

    pages.forEach((page,index)=>{

        const pageDiv =
        document.createElement("div");

        pageDiv.classList.add("page");

        pageDiv.innerHTML = `

        <div class="page-content">

            <img
            src="${page.image}"
            class="page-image"
            alt="Memory">

            <h2 class="page-title">
                ${page.title}
            </h2>

            <p class="page-text">
                ${page.message}
            </p>

            <div class="page-number">
                ${index + 1}
            </div>

        </div>

        `;

        pageElements.push(pageDiv);
    });

    pageFlip =
    new St.PageFlip(book,{
        width:500,
        height:700,

        size:"stretch",

        minWidth:280,
        maxWidth:1000,

        minHeight:420,
        maxHeight:1350,

        maxShadowOpacity:0.5,

        mobileScrollSupport:true,

        showCover:true
    });

    pageFlip.loadFromHTML(
        pageElements
    );

    pageFlip.on("flip",()=>{

        pageFlipSound.play();

    });

    pageFlip.on("changeOrientation",()=>{

        window.dispatchEvent(
            new Event("resize")
        );

    });
}
/*
REPLACE IMAGES:

assets/images/page1.jpg
assets/images/page2.jpg
etc.

REPLACE TEXT:

title
message

Add up to 20 pages or more.
*/

const pages = [

{
    image:"assets/images/page1.jpg",
    title:"Chapter One",
    message:"The day our paths first crossed felt like magic."
},

{
    image:"assets/images/page2.jpg",
    title:"A New Adventure",
    message:"Every smile became another page in our story."
},

{
    image:"assets/images/page3.jpg",
    title:"Golden Memories",
    message:"We collected memories brighter than stars."
},

{
    image:"assets/images/page4.jpg",
    title:"Through Every Season",
    message:"Together through sunshine and storms."
},

{
    image:"assets/images/page5.jpg",
    title:"Forever Begins Again",
    message:"Every anniversary feels like page one."
},

{
 image:"assets/images/page6.jpg",
 title:"The Journey Continues",
 message:"A beautiful memory here."
},

{
 image:"assets/images/page20.jpg",
 title:"Happily Ever After",
 message:"And our story is still being written..."
},

];

/*
Duplicate entries until you reach 20 pages.

Example:

{
 image:"assets/images/page6.jpg",
 title:"...",
 message:"..."
}
*/

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
