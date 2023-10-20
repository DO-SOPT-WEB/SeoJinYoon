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

function createInOutList(item) {
  return `
    <li>
      <button class="close">x</button>
      <div class="detail">
        <span class="content">${item.content}</span>
        <span class="place">${item.place}</span>
        ${
          item.inOrOut === 'in'
            ? `<span class="in-list">+${item.amount}</span>`
            : `<span class="out-list">-${item.amount}</span>`
        }
      </div>
    </li>
  `;
}
function displayInOutListItems(item) {
  const inOutListContainer = document.getElementById('inout-list');
  inOutListContainer.innerHTML = item.map((item) => createInOutList(item)).join('');
}

function displayBalance(items) {
  const income_amount_Element = document.getElementById('income_amount');
  const outcome_amount_Element = document.getElementById('outcome_amount');
  const init_balanceElement = document.getElementById('init_balance');

  let totalBalance = INIT_BALANCE;
  let income_amount = 0;
  let outcome_amount = 0;

  // 단위 구분 쉼표 제거 후 연산
  items.forEach((item) => {
    if (item.inOrOut === 'out') {
      totalBalance -= Number(item.amount.replace(/,/g, ''));
      outcome_amount -= Number(item.amount.replace(/,/g, ''));
    } else {
      totalBalance += Number(item.amount.replace(/,/g, ''));
      income_amount += Number(item.amount.replace(/,/g, ''));
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
