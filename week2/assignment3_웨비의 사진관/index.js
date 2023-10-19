const topBtn = document.getElementById('top-btn')
const topSection = document.getElementById('topHeader');
const bottomSection = document.getElementById('content3');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const topSectionY = topSection.getBoundingClientRect().height;
    const bottomEndY = bottomSection.getBoundingClientRect().bottom;

    const heightDiff = topSectionY - bottomEndY

    topBtn.style.opacity = (topSectionY - scrollY) / heightDiff;
})
