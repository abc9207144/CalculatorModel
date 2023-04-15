// DOM Elements

const valueEl = document.querySelector('.display');
const acEl = document.querySelector('.clear');
const pmEl = document.querySelector('.plusmn');
const percentEl = document.querySelector('.percentange');

const addEl = document.querySelector('.add');
const subtractEl = document.querySelector('.subtract');
const multipleEl = document.querySelector('.multiple');
const divideEl = document.querySelector('.divide');
const equalEl = document.querySelector('.equal');

const decimalEl = document.querySelector('.decimal');
const number0El = document.querySelector('.number0');
const number1El = document.querySelector('.number1');
const number2El = document.querySelector('.number2');
const number3El = document.querySelector('.number3');
const number4El = document.querySelector('.number4');
const number5El = document.querySelector('.number5');
const number6El = document.querySelector('.number6');
const number7El = document.querySelector('.number7');
const number8El = document.querySelector('.number8');
const number9El = document.querySelector('.number9');
const numberElArray = [
  number0El, number1El, number2El, number3El, number4El,
  number5El, number6El, number7El, number8El, number9El
];


// variables
let valueStrInMemory = null;
let operatorInMemory = null;


// Functions
const getValueAsStr = () => valueEl.textContent.split(',').join('');

const getValueAsNum = () => {
  return parseFloat(getValueAsStr());
};

const setStrAsValue = (valueStr) => {
  if (valueStr[valueStr.length - 1] === '.') {
    valueEl.textContent += '.';
    return;
  }

  const [wholeNumStr, decimalStr] = valueStr.split('.');
  if (decimalStr) {
    valueEl.textContent =
      parseFloat(wholeNumStr).toLocaleString() + '.' + decimalStr;
  } else {
    valueEl.textContent = parseFloat(wholeNumStr).toLocaleString();
  }
};

const handleNumberClick = (numStr) => {
  const currentValueStr = getValueAsStr();
  if (currentValueStr === '0') {
    setStrAsValue(numStr);
  } else {
    setStrAsValue(currentValueStr + numStr);
  }
};

const getResultOfOperationAsStr = () => {
  const currentValueNum = getValueAsNum();
  const valueNumInMemory = parseFloat(valueStrInMemory);
  let newValueNum;
  if (operatorInMemory === 'add') {
    newValueNum = valueNumInMemory + currentValueNum;
  } else if (operatorInMemory === 'subtract') {
    newValueNum = valueNumInMemory - currentValueNum;
  } else if (operatorInMemory === 'multiple') {
    newValueNum = valueNumInMemory * currentValueNum;
  } else if (operatorInMemory === 'divide') {
    newValueNum = valueNumInMemory / currentValueNum;
  }

  return newValueNum.toString();
};

const handleOperatorClick = (operation) => {
  const currentValueStr = getValueAsStr();

  if (!valueStrInMemory) {
    valueStrInMemory = currentValueStr;
    operatorInMemory = operation;
    setStrAsValue('0');
    return;
  }
  valueStrInMemory = getResultOfOperationAsStr();
  operatorInMemory = operation;
  setStrAsValue('0');
};




// Add Event Listeners to functions
acEl.addEventListener('click', () => {
  setStrAsValue('0');
  valueStrInMemory = null;
  operatorInMemory = null;
});
pmEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const currentValueStr = getValueAsStr();

  if (currentValueStr === '-0') {
    setStrAsValue('0');
    return;
  }
  if (currentValueNum >= 0) {
    setStrAsValue('-' + currentValueStr);
  } else {
    setStrAsValue(currentValueStr.substring(1));
  }
});
percentEl.addEventListener('click', () => {
  const currentValueNum = getValueAsNum();
  const newValueNum = currentValueNum / 100;
  setStrAsValue(newValueNum.toString());
  valueStrInMemory = null;
  operatorInMemory = null;
});


// add event listeners to operators
addEl.addEventListener('click', () => {
  handleOperatorClick('add');
});
subtractEl.addEventListener('click', () => {
  handleOperatorClick('subtract');
});
multipleEl.addEventListener('click', () => {
  handleOperatorClick('multiple');
});
divideEl.addEventListener('click', () => {
  handleOperatorClick('divide');
});
equalEl.addEventListener('click', () => {
  if (valueStrInMemory) {
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;
  }
});


// Add Event Listeners to numbers and decimal
for (let i=0; i < numberElArray.length; i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click', () => {
    handleNumberClick(i.toString());
  });
}
decimalEl.addEventListener('click', () => {
  const currentValueStr = getValueAsStr();
  if (!currentValueStr.includes('.')) {
    setStrAsValue(currentValueStr + '.');
  }
});


