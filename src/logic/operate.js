import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  const numOne = new Big(firstNum);
  const numTwo = new Big(secondNum);
  let result;

  switch (operation) {
    case '+':
      result = numOne.plus(numTwo);
      break;

    case '-':
      result = numOne.minus(numTwo);
      break;

    case 'x':
      result = numOne.times(numTwo);
      break;

    case '%':
      result = numOne.mod(numTwo);
      break;

    case '/':
      result = numOne.div(numTwo);
      break;

    case '+/-':
      result = secondNum
        ? numTwo * -1
        : numOne * -1;
      break;

    case 'AC':
      result = 0;
      break;

    case '.':
      result = numOne + (numTwo.times(Big(0.1).secondNum.length));
      break;

    default:
      break;
  }

  return result;
};

export default operate;
