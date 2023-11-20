const img = document.querySelector('.card-img')
window.addEventListener('resize', changeSrcResize);
window.addEventListener('load', changeSrcResize);
function changeSrcResize() {
    if (window.innerWidth >= 1280) {
        img.setAttribute('src', 'images/image-product-desktop.jpg')
    } else {
        img.setAttribute('src', 'images/image-product-mobile.jpg')
    }
}