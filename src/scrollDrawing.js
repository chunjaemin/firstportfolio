
function handStart() {
    var content1 = document.querySelector('.hand-container')

    var path1 = document.querySelector('.path1');
    var pathLength1 = path1.getTotalLength();

    path1.style.strokeDasharray = pathLength1;
    path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.8, content1, pathLength1)


    function calcDashoffset(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler() {
        const scrollY = window.scrollY + (window.innerHeight * 0.8)
        path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, pathLength1)
    }


    window.addEventListener('scroll', scrollHandler)
}

function butterflyStart() {
    var content2 = document.querySelector('.butterfly-container')

    var path2 = document.querySelector('.path2');
    var pathLength2 = path2.getTotalLength();

    path2.style.strokeDasharray = pathLength2;
    path2.style.strokeDashoffset = calcDashoffset2(window.innerHeight * 0.2, content2, pathLength2)


    function calcDashoffset2(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler2() {
        const scrollY = window.scrollY + (window.innerHeight * 0.2)
        path2.style.strokeDashoffset = calcDashoffset2(scrollY, content2, pathLength2)
    }

    window.addEventListener('scroll', scrollHandler2)
}

function capStart() {
    var content3 = document.querySelector('.cap-virtual-container1')
    var content4 = document.querySelector('.cap-virtual-container2')

    var path3 = document.querySelector('.path3');
    var pathLength3 = path3.getTotalLength();
    var path4 = document.querySelector('.path4');
    var pathLength4 = path4.getTotalLength();

    path3.style.strokeDasharray = pathLength3;
    path3.style.strokeDashoffset = calcDashoffset3(window.innerHeight * 0.2, content3, pathLength3)
    path4.style.strokeDasharray = pathLength4;
    path4.style.strokeDashoffset = calcDashoffset4(window.innerHeight * 0.2, content4, pathLength4)


    function calcDashoffset3(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function calcDashoffset4(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler3() {
        const scrollY = window.scrollY + (window.innerHeight * 0.2)
        path3.style.strokeDashoffset = calcDashoffset3(scrollY, content3, pathLength3)
    }

    function scrollHandler4() {
        const scrollY = window.scrollY + (window.innerHeight * 0.2)
        path4.style.strokeDashoffset = calcDashoffset4(scrollY, content4, pathLength4)
    }

    window.addEventListener('scroll', scrollHandler3)
    window.addEventListener('scroll', scrollHandler4)
}

function airplaneStart() {
    var content5 = document.querySelector('.cap-virtual-container2')

    var path5 = document.querySelector('.path5');
    var pathLength5 = path5.getTotalLength();

    path5.style.strokeDasharray = pathLength5;
    path5.style.strokeDashoffset = calcDashoffset5(window.innerHeight * 0.2, content5, pathLength5)


    function calcDashoffset5(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler5() {
        const scrollY = window.scrollY + (window.innerHeight * 0.2)
        path5.style.strokeDashoffset = calcDashoffset5(scrollY, content5, pathLength5)
    }

    window.addEventListener('scroll', scrollHandler5)
}

function doublehandeStart() {
    var content6 = document.querySelector('.doublehand-container')

    var path6 = document.querySelector('.path6');
    var pathLength6 = path6.getTotalLength();

    path6.style.strokeDasharray = pathLength6;
    path6.style.strokeDashoffset = calcDashoffset6(window.innerHeight * 0.9, content6, pathLength6)


    function calcDashoffset6(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler6() {
        const scrollY = window.scrollY + (window.innerHeight * 0.9)
        path6.style.strokeDashoffset = calcDashoffset6(scrollY, content6, pathLength6)
    }

    window.addEventListener('scroll', scrollHandler6)
}

function trophyStart() {
    var content7 = document.querySelector('.cap-virtual-container3')

    var path7 = document.querySelector('.path7');
    var pathLength7 = path7.getTotalLength();

    path7.style.strokeDasharray = pathLength7;
    path7.style.strokeDashoffset = calcDashoffset7(window.innerHeight * 0.2, content7, pathLength7)


    function calcDashoffset7(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler7() {
        const scrollY = window.scrollY + (window.innerHeight * 0.2)
        path7.style.strokeDashoffset = calcDashoffset7(scrollY, content7, pathLength7)
    }

    window.addEventListener('scroll', scrollHandler7)
}

function cloudStart() {
    var content8 = document.querySelector('.cap-virtual-container4')

    var path8 = document.querySelector('.path8');
    var pathLength8 = path8.getTotalLength();

    path8.style.strokeDasharray = pathLength8;
    path8.style.strokeDashoffset = calcDashoffset8(window.innerHeight * 0.2, content8, pathLength8)


    function calcDashoffset8(scrollY, element, length) {
        const top = window.scrollY + element.getBoundingClientRect().top
        const ratio = (scrollY - top) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler8() {
        const scrollY = window.scrollY + (window.innerHeight * 0.2)
        path8.style.strokeDashoffset = calcDashoffset8(scrollY, content8, pathLength8)
        console.log(window.scrollY)
    }

    window.addEventListener('scroll', scrollHandler8)
}

export default {
    handStart,
    butterflyStart,
    capStart,
    airplaneStart,
    doublehandeStart,
    trophyStart,
    cloudStart,
}