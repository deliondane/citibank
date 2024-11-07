
let currentIndex = 1; // 시작 인덱스 (첫 번째 이미지)
const totalItems = document.querySelectorAll('ul.bar li').length; // 전체 이미지 수

function handleClick(index) {
  // 모든 li 요소의 'on' 클래스를 제거
  const allItems = document.querySelectorAll('ul.bar li');
  allItems.forEach(item => item.classList.remove('on'));

  // 클릭된 li 요소에 'on' 클래스 추가
  const selectedItem = document.querySelector(`ul.bar li:nth-child(${index})`);
  selectedItem.classList.add('on');

  // 배경 이미지 변경
  const newImageSrc = selectedItem.getAttribute('data-src');
  document.getElementById('background').style.backgroundImage = `url(${newImageSrc})`;
}

// 5초마다 이미지 넘기기
function startAutoSlide() {
  setInterval(() => {
    currentIndex = (currentIndex % totalItems) + 1; // 다음 인덱스로 이동 (순환)
    handleClick(currentIndex);
  }, 600000); // 600000ms = 10분
}
// 초기화 및 슬라이드 시작
handleClick(currentIndex); // 첫 번째 이미지로 초기화
startAutoSlide();
