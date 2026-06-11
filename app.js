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