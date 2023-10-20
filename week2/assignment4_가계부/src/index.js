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
  inOutListContainer.innerHTML = HISTORY_LIST.map((item) => createInOutList(item)).join('');
}

function displayBalance(items) {
  const income_amount_Element = document.getElementById('income_amount');
  const outcome_amount_Element = document.getElementById('outcome_amount');
  const init_balanceElement = document.getElementById('init_balance');

  let totalBalance = INIT_BALANCE;
  let income_amount = 0;
  let outcome_amount = 0;

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

document.addEventListener('DOMContentLoaded', () => {
  displayInOutListItems(HISTORY_LIST);
  displayBalance(HISTORY_LIST);
});
