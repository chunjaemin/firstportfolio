import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function start() {
    gsap.utils.toArray(".ani-p").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 60%",
                end: "top 10%",
                scrub: 1,
                toggleClass: "introduce-animation",
            },
        })
    })

    gsap.utils.toArray(".stamp-body").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "bottom 90%",
                end: "bottom 10%",
                scrub: 1,
                toggleClass: "stamp-body-animation",
            }
        })
    })

    gsap.utils.toArray(".timeline-text-size").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 70%",
                end: "top 10%",
                scrub: 1,
                toggleClass: "paragraph-text-animation",
            }
        })
    })

    gsap.utils.toArray(".final-text").forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 60%",
                end: "top 10%",
                scrub: 1,
                toggleClass: "final-text-animation",
            },
        })
    })

    gsap.to('.card-flex-container',{
        scrollTrigger : {
            trigger: '.card-flex-container',
            start: "top 60%",
            end: "60% 10%",
            scrub: 1,
            toggleClass: "final-card-animation",
        },
    })

    //sticky box 애니메이션
    var stickyBox = document.querySelectorAll('.sticky-container');
    var stamp = document.querySelectorAll('.stamp');
    var shadow = document.querySelectorAll('.shadow');
    var title = document.querySelectorAll('.timeline-title');
    var card = document.querySelectorAll('.card');
    var text = document.querySelectorAll('.timeline-text');
    var appcard = document.querySelector('.app-card-container')

    window.addEventListener('scroll', scrollEvent)

    function scrollEvent() {
        const scrollY = window.scrollY + (window.innerHeight * 0.5)
        stamp.forEach((element,i) => {
            scrollStamp(scrollY, element, i);
        });
    }

    function scrollStamp(scrollY, element, i) {
        const bottom = stickyBox[i].getBoundingClientRect().bottom + window.scrollY;
        const top = stickyBox[i].getBoundingClientRect().top + window.scrollY;
        if (scrollY < top + window.innerHeight * 0.1) {
            element.classList.remove('stamp-animation');
            shadow[i].classList.remove('stamp-shadow-animation');
            title[i].classList.remove('timeline-title-animation');
            text[i].classList.remove('timeline-text-animation');
            if(card[i-1]){ card[i-1].classList.remove('card-animation');}
            if (i==1){appcard.classList.remove('app-card-container-animation')}
        } else if (scrollY >= top + window.innerHeight * 0.1 && scrollY <= bottom - window.innerHeight * 0.2) {
            element.classList.add('stamp-animation');
            shadow[i].classList.add('stamp-shadow-animation');
            title[i].classList.add('timeline-title-animation');
            text[i].classList.add('timeline-text-animation');
            if(card[i-1]){ card[i-1].classList.add('card-animation');}
            if (i==1){
                appcard.classList.add('app-card-container-animation')
            }
        } else if (scrollY > bottom - window.innerHeight * 0.2) {
            element.classList.remove('stamp-animation');
            shadow[i].classList.remove('stamp-shadow-animation');
            title[i].classList.remove('timeline-title-animation');
            text[i].classList.remove('timeline-text-animation');
            if(card[i-1]){ card[i-1].classList.remove('card-animation');}
            if (i==1){appcard.classList.remove('app-card-container-animation')}
        }
    }


}



export default {
    start,
}