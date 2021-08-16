import operate from './operate';

const calculate = (buttonName, data) => {
  const { next, operation, total } = data;
  const result = operate(
    operation,
    next,
    total,
  );

  return {
    buttonName,
    next,
    result,
  };
};

export default calculate;
