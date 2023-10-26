// top 버튼 스크롤에 따른 색 변경
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

// section 1 설명 더보기 
const imgContainers = document.getElementsByClassName('img_hover_container');
const captionDetails = document.getElementsByClassName('caption_detail');
const captions = document.getElementsByClassName('caption');
const moreBtns = document.getElementsByClassName('caption_detail_more_btn');

for (let i = 0; i<imgContainers.length; i++) {
    if (64 < captionDetails[i].scrollHeight) {
        moreBtns[i].style.display = 'inline-block';

        imgContainers[i].addEventListener('mouseleave', () =>{
            // 더보기 버튼 다시 생기도록, 부드럽게 생기기 
            setTimeout(() => {
                captionDetails[i].style.webkitLineClamp = 3;
                moreBtns[i].style.display = 'inline-block'; 
            }, 300);
        });
    }

    moreBtns[i].addEventListener('click', () => {
        moreBtns[i].style.display = 'none';
        captionDetails[i].style.webkitLineClamp = 'unset';
    });
    

}






// Preview 좌우 스크롤
const previewLeft = document.getElementById('preview_left_btn');
const previewRight = document.getElementById('preview_right_btn');
const previewList = document.getElementById('preview_list');

previewRight.addEventListener('click', () => {
    let lastImgLocation = previewList.scrollWidth;
    previewList.scroll({
        left: lastImgLocation,
        behavior: "smooth"
    });
})

previewLeft.addEventListener('click', () => {
    previewList.scroll({
        left: 0,
        behavior: "smooth"
    });
})