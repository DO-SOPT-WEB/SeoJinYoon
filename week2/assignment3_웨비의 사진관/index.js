// 스크롤 
const topBtn = document.getElementById('top-btn');
const topSection = document.getElementById('topHeader');
const bottomSection = document.getElementById('content3');

document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const topSectionY = topSection.getBoundingClientRect().height;
    const bottomEndY = bottomSection.getBoundingClientRect().bottom;

    const heightDiff = topSectionY - bottomEndY

    topBtn.style.opacity = (topSectionY - scrollY) / heightDiff;
})

// 더보기 
const imgContainers = document.getElementsByClassName('img_hover_container');
const captionDetails = document.getElementsByClassName('caption_detail');
const captions = document.getElementsByClassName('caption');
const moreBtns = document.getElementsByClassName('caption_detail_more_btn');

for (let i = 0; i<imgContainers.length; i++) {
    if (66 < captionDetails[i].scrollHeight) {
        moreBtns[i].style.display = 'inline-block';
    }

    moreBtns[i].addEventListener('click', () => {
        moreBtns[i].style.display = 'none';
        captionDetails[i].style.webkitLineClamp = 'unset';
    });
    
    imgContainers[i].addEventListener('mouseleave', () =>{
        // 더보기 버튼 다시 생기도록, 부드럽게 생기기 
        setTimeout(() => {
            captionDetails[i].style.webkitLineClamp = 3;
            moreBtns[i].style.display = 'inline-block'; 
        }, 300);
    });
}