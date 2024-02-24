
function startScrollDashboard() {
    var leftElement=document.querySelectorAll('.left-dashboard');
    var leftVirtualBox=document.querySelectorAll('.timeline-left-image-box');


    function leftScrollTrigger(){
        leftVirtualBox.forEach((element,i)=>{
            const scrollY = window.scrollY+window.innerHeight*0.5;
            leftElementScroll(scrollY,element,i);
        })
    }

    function leftElementScroll(scrollY,element,i){
        const top = window.scrollY+element.getBoundingClientRect().top;
        const bottom = window.scrollY+element.getBoundingClientRect().bottom;

        if (scrollY > 16000) {
            if (scrollY < top) {
                leftElement[i].classList.remove('opacity1')
            } else if (scrollY >= top && scrollY < bottom) {
                leftElement[i].classList.add('opacity1')
            } else if (scrollY > bottom) {
                leftElement[i].classList.remove('opacity1')
            }
        }
    }

    var rightElement=document.querySelectorAll('.dashboard-real-text');
    var rightVirtualBox=document.querySelectorAll('.dashboard-text');

    function rightScrollTrigger(){
        rightVirtualBox.forEach((element,i)=>{
            const scrollY = window.scrollY+window.innerHeight*0.5;
            rightElementScroll(scrollY,element,i);
        })
    }

    function rightElementScroll(scrollY,element,i){
        const top = window.scrollY + element.getBoundingClientRect().top;
        const bottom = window.scrollY + element.getBoundingClientRect().bottom;

        if (scrollY > 16000) {
            if (scrollY < top) {
                rightElement[i].classList.remove('opacity1')
            } else if (scrollY >= top && scrollY < bottom) {
                rightElement[i].classList.add('opacity1')
            } else if (scrollY > bottom) {
                rightElement[i].classList.remove('opacity1')
            }
        }
    }


    window.addEventListener('scroll',leftScrollTrigger);
    window.addEventListener('scroll',rightScrollTrigger);

}

export default{
    startScrollDashboard,
}