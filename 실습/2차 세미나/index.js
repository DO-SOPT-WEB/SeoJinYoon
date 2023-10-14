// 5️⃣ strawberry 아래에 mango 추가하기
const mango = document.createElement('li');

const mangoText = document.createTextNode('mango');
mango.appendChild(mangoText);
// mango.innerText = "mango";

const fruitsList = document.querySelector('ul');
fruitsList.appendChild(mango);

// 6️⃣ class가 red인 애들만 삭제하기
const redFruit = document.querySelectorAll('.red');
redFruit.forEach((fruit) => {
  fruit.remove();
});

// 7️⃣ 세번째 과일 파란색 만들기
const thirdFruit = document.querySelector('li:nth-child(3)');
thirdFruit.classList.add('blue');

// 8️⃣ 버튼 누르면 과일 개수 알려주기
const lengthButton = document.querySelector('button.count');
function showLength() {
  const allList = document.querySelectorAll('li');
  alert(`과일 개수는 ${allList.length}개 입니다`);
}
lengthButton.addEventListener('click', showLength);
