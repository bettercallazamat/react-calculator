import operate from './operate';

const calculate = (calculator, buttonName) => {
  const cloneCalculator = { ...calculator };
  let { total, next, operation } = cloneCalculator;
  const operators = ['x', '+', '-', '÷'];

  // HELPERS FOR IF STATEMENT READABLITY
  const isNumber = /^(\d)$/.test(buttonName);
  const isOperator = operators.includes(buttonName);
  const isPercent = buttonName === '%';
  const isEqualSign = buttonName === '=';
  const isSign = buttonName === '+/-';
  const isClear = buttonName === 'AC';
  const isDot = buttonName === '.';
  const isFloat = next && next.includes('.');

  if (isNumber || (isDot && !isFloat && next)) {
    next = next ? next + buttonName : buttonName;
  } else if (isClear) {
    total = null;
    next = null;
    operation = null;
  } else if (isSign && next) {
    next = (parseFloat(next) * (-1)).toString();
  } else if (isPercent && next) {
    next = (parseFloat(next) / 100).toString();
  } else if (isOperator) {
    if (next) {
      if (total) {
        const result = operate(total, next, operation);
        total = result && result.toString();
        next = null;
        operation = buttonName;
      } else {
        total = next;
        next = null;
        operation = buttonName;
      }
    } else if (total) {
      operation = buttonName;
    } else if (buttonName === '-') {
      next = buttonName;
    }
  } else if (isEqualSign) {
    if (total && next) {
      const result = operate(total, next, operation);
      total = null;
      next = result && result.toString();
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
