import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  const bigNumOne = numOne ? new Big(numOne) : null;
  const bigNumTwo = numTwo ? new Big(numTwo) : null;

  switch (operation) {
    case '+':
      return bigNumOne.plus(bigNumTwo);
    case '-':
      return bigNumOne.minus(bigNumTwo);
    case 'x':
      return bigNumOne.times(bigNumTwo);
    case '÷':
      if (numTwo === '0') {
        return null;
      }
      return bigNumOne.div(bigNumTwo);
    default:
      return null;
  }
};

export default operate;
