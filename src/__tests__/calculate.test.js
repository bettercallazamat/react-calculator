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

  it('returns the the string 2 as the next propertyfor "5-3=""', () => {
    let result = calculate(appState, '5');
    result = calculate(result, '-');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.next).toEqual('2');
  });

  it('does not return the the string 53 as the next property for "5-3="', () => {
    let result = calculate(appState, '5');
    result = calculate(result, '-');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.next).not.toBe('53');
  });

  it('returns the the string 12 as the next propertyfor "4x3="', () => {
    let result = calculate(appState, '4');
    result = calculate(result, 'x');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.next).toEqual('12');
  });

  it('does not return the the string 43 as the next property for "4x3="', () => {
    let result = calculate(appState, '4');
    result = calculate(result, 'x');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.next).not.toBe('43');
  });

  it('returns the the string 6 as the next propertyfor "18÷3="', () => {
    let result = calculate(appState, '1');
    result = calculate(result, '8');
    result = calculate(result, '÷');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.next).toEqual('6');
  });

  it('does not return the the string 183 as the next property for "18÷3="', () => {
    let result = calculate(appState, '1');
    result = calculate(result, '8');
    result = calculate(result, '÷');
    result = calculate(result, '3');
    result = calculate(result, '=');
    expect(result.next).not.toBe('183');
  });

  it('returns null obj if number is devided by 0 for "3÷0="', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('does not returns 0 as a next property for "3÷0="', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(result.next).not.toBe('0');
  });

  it('returns the string 0.04 as the next property for "4%"', () => {
    let result = calculate(appState, '4');
    result = calculate(result, '%');
    expect(result.next).toEqual('0.04');
  });

  it('does not return the the string 4 as the next property for "4%"', () => {
    let result = calculate(appState, '4');
    result = calculate(result, '%');
    expect(result.next).not.toBe('4');
  });

  it('returns the string 3.5 as the next property for "3.5"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '.');
    result = calculate(result, '5');
    expect(result.next).toEqual('3.5');
  });

  it('does not return the the string 35 as the next property for "3.5"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '.');
    result = calculate(result, '5');
    expect(result.next).not.toBe('35');
  });

  it('returns the string 12.3 as the next property for "1.23x10="', () => {
    let result = calculate(appState, '1');
    result = calculate(result, '.');
    result = calculate(result, '2');
    result = calculate(result, '3');
    result = calculate(result, 'x');
    result = calculate(result, '1');
    result = calculate(result, '0');
    result = calculate(result, '=');
    expect(result.next).toEqual('12.3');
  });

  it('returns obj with null properties for "4+3= AC"', () => {
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

  it('does not return obj with prev properties for "4+3= AC"', () => {
    let result = calculate(appState, '4');
    result = calculate(result, '+');
    result = calculate(result, '3');
    result = calculate(result, '=');
    result = calculate(result, 'AC');
    expect(result).not.toBe({
      total: null,
      next: '7',
      operation: null,
    });
  });

  it('returns the string -5 as the next property for "3+5 +/-"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '+/-');
    expect(result.next).toEqual('-5');
  });

  it('does not return the string -8 as the next property for "3+5 +/-"', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '5');
    result = calculate(result, '+/-');
    expect(result.next).not.toBe('-8');
  });

  it('returns the string 0 as the next property for "0+/-"', () => {
    let result = calculate(appState, '0');
    result = calculate(result, '+/-');
    expect(result.next).toEqual('0');
  });

  it('does not return the string -0 as the next property for "0+/-"', () => {
    let result = calculate(appState, '0');
    result = calculate(result, '+/-');
    expect(result.next).not.toBe('-0');
  });

  it('returns the obj ingoring = operation as the next operation for "3+="', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '=');
    expect(result).toEqual({
      total: '3',
      next: null,
      operation: '+',
    });
  });

  it('does not return the string = as a operation property for "3+="', () => {
    let result = calculate(appState, '3');
    result = calculate(result, '+');
    result = calculate(result, '=');
    expect(result.operation).not.toBe('=');
  });
});
