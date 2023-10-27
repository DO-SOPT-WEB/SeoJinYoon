const INIT_BALANCE = 0;
const HISTORY_LIST = [
  {
    id: 1,
    content: '식비',
    place: '용용선생 건대점',
    inOrOut: 'out',
    amount: '43,000',
  },
  {
    id: 2,
    content: '수입',
    place: '당근마켓 거래',
    inOrOut: 'in',
    amount: '13,000',
  },
  {
    id: 3,
    content: '간식',
    place: '세븐일레븐 양재시장',
    inOrOut: 'out',
    amount: '25,000',
  },
  {
    id: 4,
    content: '용돈',
    place: '가족계좌',
    inOrOut: 'in',
    amount: '100,000',
  },
];

// 초기 렌더링 시 HISTORY_LIST 값에 따른 li html
function createInOutList(item) {
  return `
    <li>
      <button class="close" id=${item.id} onClick="deleteHandler(this)">x</button>
      <div class="detail">
        <span class="content">${item.content}</span>
        <span class="place">${item.place}</span>
        ${
          item.inOrOut === 'in'
            ? `<span class="in-list" id="in-list">+${item.amount}</span>`
            : `<span class="out-list" id="out-list">-${item.amount}</span>`
        }
      </div>
    </li>
  `;
}
// li html 동적 생성
function displayInOutListItems(items) {
  const inOutListContainer = document.getElementById('inout-list');
  inOutListContainer.innerHTML = items.map((item) => createInOutList(item)).join('');
}
// HISTORY_LIST에 따른 값 업데이트 함수
function displayBalance(items) {
  const income_amount_Element = document.getElementById('income_amount');
  const outcome_amount_Element = document.getElementById('outcome_amount');
  const init_balanceElement = document.getElementById('init_balance');

  let totalBalance = INIT_BALANCE;
  let income_amount = 0;
  let outcome_amount = 0;

  // 단위 구분 쉼표 제거 후 연산
  items.forEach((item) => {
    let itemAmount = Number(item.amount.replace(/,/g, ''));
    if (item.inOrOut === 'out') {
      totalBalance -= itemAmount;
      outcome_amount -= itemAmount;
    } else {
      totalBalance += itemAmount;
      income_amount += itemAmount;
    }
  });

  // 나의 자산, 총수입, 총지출 렌더링
  init_balanceElement.innerText = totalBalance;
  income_amount_Element.innerText = income_amount;
  outcome_amount_Element.innerText = outcome_amount.toString().replace('-', ' ');
}

// 최초 렌더링
document.addEventListener('DOMContentLoaded', () => {
  displayInOutListItems(HISTORY_LIST);
  displayBalance(HISTORY_LIST);
});

// ---------------------------------------------------------------
// input 체크 여부에 따른 렌더링
function displayCheckedElement(item) {
  const checkedEls = document.querySelectorAll('input[name="inOrOut"]:checked');

  // 모두 체크된 경우
  if (checkedEls.length === 2) {
    displayInOutListItems(HISTORY_LIST);
    displayBalance(HISTORY_LIST);
  }
  // 모두 체크되지 않은 경우
  else if (checkedEls.length === 0) {
    displayInOutListItems([]);
  } else {
    // 기존 HISTORY_LIST를 필터링하여 전달
    if (checkedEls[0].className === 'outcome-btn') {
      let outHistory = HISTORY_LIST.filter((item) => item.inOrOut === 'out');
      displayInOutListItems(outHistory);
    } else {
      let inHistory = HISTORY_LIST.filter((item) => item.inOrOut === 'in');
      displayInOutListItems(inHistory);
    }
  }
}

// ---------------------------------------------------------------
// 삭제버튼
function deleteHandler(e) {
  // 지우려는 값 객체에서 찾기
  const HISTORY_LIST_id = document.getElementById(e.getAttribute('id')).getAttribute('id');
  let deleteTargetIdx;
  HISTORY_LIST.forEach((item, idx) => {
    if (item.id == HISTORY_LIST_id) {
      deleteTargetIdx = idx;
    }
  });
  // 객체에서 삭제
  HISTORY_LIST.splice(deleteTargetIdx, 1);
  // 리렌더링
  displayInOutListItems(HISTORY_LIST);
  displayBalance(HISTORY_LIST);
}

// ---------------------------------------------------------------
// 모달창 띄우기
function onClickModalOpen() {
  const ModalOpenBtn = document.getElementById('modal');
  const blackBg = document.getElementById('black_bg');
  ModalOpenBtn.style.display = 'block';
  blackBg.style.display = 'block';
}

// 모달창 select 박스 option(수입, 지출) HTML
function type_option(item) {
  return `<option value${item}>${item}</option>`;
}

// 모달창 수입,지출 버튼 handler
function onClickModalTypeBtn() {
  // 버튼 클릭시 색상 변경
  const modalTypeBtns = document.getElementsByClassName('modal_btn');
  [...modalTypeBtns].forEach((btn, i) => {
    if (event.currentTarget == btn) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 버튼에 따른 카테고리 option 변경 위한 배열
  const content_type_container = document.getElementById('content_type');
  let in_content_type = [];
  let out_content_type = [];

  HISTORY_LIST.forEach((item) => {
    if (item.inOrOut === 'in') {
      in_content_type.push(item.content);
    } else {
      out_content_type.push(item.content);
    }
  });

  // 눌린 버튼에 따른 option 생성
  if (event.currentTarget.innerText == '수입') {
    content_type_container.innerHTML = in_content_type.map((item) => type_option(item)).join('');
  } else {
    content_type_container.innerHTML = out_content_type.map((item) => type_option(item)).join('');
  }
}

// 모달창에 입력한 값 저장 및 기존값들 업데이트
function onClickModalSaveBtn() {
  event.preventDefault();
  // 입력받은 값 저장
  const content_type_container = document.getElementById('content_type');
  const modal_list_inOrOut = document.getElementsByClassName('active'); // 수입, 지출 중 눌린 값 가져오기
  const modal_list_place = document.getElementById('list_place');
  const modal_list_amount = document.getElementById('list_amount');

  let content = content_type_container.options[content_type_container.selectedIndex].value;
  let place = modal_list_place.value;
  let inOrOut = modal_list_inOrOut[0].name;
  let amount = modal_list_amount.value;

  let listItem = [
    {
      id: HISTORY_LIST.length + 1,
      content,
      place,
      inOrOut,
      amount,
    },
  ];

  // 객체에 값 추가
  HISTORY_LIST.push(listItem[0]);
  // 리렌더링
  displayInOutListItems(HISTORY_LIST);
  displayBalance(HISTORY_LIST);

  alert('저장되었습니다.');
}

// 모달창 닫기
function onClickModalClose() {
  const ModalOpenBtn = document.getElementById('modal');
  const blackBg = document.getElementById('black_bg');
  ModalOpenBtn.style.display = 'none';
  blackBg.style.display = 'none';
  event.preventDefault;
}
