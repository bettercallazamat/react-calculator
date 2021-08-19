import calculate from '../logic/calculate';

let appState = {
  total: null,
  next: null,
  operation: null,
};

const resetAppState = () => ({
  total: null,
  next: null,
  operation: null,
});

beforeEach(() => { appState = resetAppState(); });

describe('calculate', () => {
  it('returns the string 5 as the next property for "3+5"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    expect(result.next).toEqual('5');
  });

  it('does not return the the string 8 as the next property for "3+5"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    expect(result.next).not.toBe('8');
  });

  it('returns the the string 8 as the next propertyfor "3+5="', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.next).toEqual('8');
  });

  it('does not return the the string 35 as the next property for "3+5"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '=');
    expect(result.next).not.toBe('35');
  });

  it('returns the string + as the operation property for "4+"', () => {
    let result = calculate(appState, '4');
    result = calculate(result, '+');
    expect(result.operation).toEqual('+');
  });

  it('returns the string -5 as the next property for "3+5 +/-"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '+/-');
    expect(result.next).toEqual('-5');
  });

  it('Should return the string 3.5 as the total property for "3.5"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '.');
    result = calculate(result, '5');
    expect(result.next).toEqual('3.5');
  });

  it('Should return the string 0.04 as the operation property for "4%"', () => {
    let result = calculate(appState, '4');
    result = calculate(result, '%');
    expect(result.next).toEqual('0.04');
  });

  it('Should return obj with null properties for "4+3= AC"', () => {
    let result = calculate(appState, '4');
    result = calculate(result, '+');
    result = calculate(result, '3');
    result = calculate(result, '=');
    result = calculate(result, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});
