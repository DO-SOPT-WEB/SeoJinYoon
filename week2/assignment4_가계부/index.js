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
    amount: '13,000'
  },
  {
    id:3,
    content: '간식',
    place: '세븐일레븐 양재시장',
    inOrOut: 'out',
    amount: '25,000'
  },
  {
    id:4,
    content: '용돈',
    place: '가족계좌',
    inOrOut: 'in',
    amount: '100,000'
  }
];

let totalBalance = INIT_BALANCE;
document.addEventListener('DOMContentLoaded', () => {
const ulElement = document.getElementById('inout-list');
const init_balanceElement = document.getElementById('init_balance');

HISTORY_LIST.forEach(item => {
  const liElement = document.createElement('li');
  const closeButton = document.createElement('button');
  closeButton.className = 'close';
  closeButton.textContent = 'x';

  const detailDiv = document.createElement('div');
  detailDiv.className = 'detail';

  const contentSpan = document.createElement('span');
  contentSpan.className = 'content';
  contentSpan.textContent = item.content;

  const placeSpan = document.createElement('span');
  placeSpan.className = 'place';
  placeSpan.textContent = item.place;

  const amountSpan = document.createElement('span');
  if (item.inOrOut === 'out') {
    amountSpan.className = 'out-list';
    amountSpan.textContent = `-${item.amount}`;
    
    totalBalance -= Number(item.amount.replace(/,/g,""));
  } else if (item.inOrOut === 'in') {
    amountSpan.className = 'in-list';
    amountSpan.textContent = `+${item.amount}`;
    
    totalBalance += Number(item.amount.replace(/,/g,""));
  }

  detailDiv.appendChild(contentSpan);
  detailDiv.appendChild(placeSpan);
  detailDiv.appendChild(amountSpan);
  liElement.appendChild(closeButton);
  liElement.appendChild(detailDiv);

  ulElement.appendChild(liElement);

  init_balanceElement.innerText = totalBalance;
});
})

