import Big from 'big.js';

const operate = (firstNum, secondNum, operation) => {
  const bigNumOne = firstNum ? new Big(firstNum) : null;
  const bigNumbTwo = secondNum ? new Big(secondNum) : null;
  let result;

  switch (operation) {
    case '+':
      result = bigNumOne.plus(bigNumbTwo);
      break;

    case '-':
      result = bigNumOne.minus(bigNumbTwo);
      break;

    case 'x':
      result = bigNumOne.times(bigNumbTwo);
      break;

    case '%':
      result = bigNumOne.mod(bigNumbTwo);
      break;

    case '/':
      result = bigNumOne.div(bigNumbTwo);
      break;

    case '+/-':
      result = secondNum
        ? bigNumbTwo * -1
        : bigNumOne * -1;
      break;

    case 'AC':
      result = '0';
      break;

    case '.':
      result = bigNumOne + (bigNumbTwo.times(Big(0.1).secondNum.length));
      break;

    default:
      break;
  }

  return result.toString();
};

export default operate;
