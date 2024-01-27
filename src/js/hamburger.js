document.querySelector(".hamburger-menu").addEventListener("click", fadeIn);
document.querySelector(".mobile__menu_close").addEventListener("click", fadeOut);

function fadeIn(){
    const animation = setInterval(frameIn, 1);
    let mobileMenu = document.querySelector('.mobile__menu');
    let pixelStep = 15;
    function frameIn () {

        let computedStyle = getComputedStyle(mobileMenu);

        let left = computedStyle.left;
        let leftAsNumber = parseInt(left);

        if (leftAsNumber < pixelStep) {
            mobileMenu.style.left = 0 + 'px';
            clearInterval(animation);
            return;
        }

        mobileMenu.style.left = (leftAsNumber - pixelStep) + 'px';
    }
}

function fadeOut(){
    const animation = setInterval(frameOut, 1);
    let mobileMenu = document.querySelector('.mobile__menu');
    let pixelStep = 15;
    let windowWidth = window.innerWidth;
    let kkk = 1;
    function frameOut () {

        let computedStyle = getComputedStyle(mobileMenu);

        let left = computedStyle.left;
        let leftAsNumber = parseInt(left);

        if (leftAsNumber > windowWidth) {
            mobileMenu.style.left = windowWidth + 'px';
            clearInterval(animation);
            return;
        }

        mobileMenu.style.left = (leftAsNumber + pixelStep) + 'px';
    }
}

