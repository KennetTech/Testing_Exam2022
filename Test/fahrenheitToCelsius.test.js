import Converters from '../Client/ConvertersTest.js';

// run singluar test npm test -t fahrenheitToCelsius.test.js

document.body.innerHTML =
  '<div><span id="celsOutput" /></div>';
  
test('fahrenheit minimum', () => {
  expect(Converters.fahrenheitToCelsius(-459)).toBe(-273);
});

test('fahrenheit upper', () => {
  expect(Converters.fahrenheitToCelsius(9941)).toBe(5505);
});

test('fahrenheit infinity', () => {
  expect(Converters.fahrenheitToCelsius(Infinity)).toBe(Infinity);
});

test('fahrenheit decimal', () => {
  expect(Converters.fahrenheitToCelsius(100.5)).toBe(38);
});

test('fahrenheit decimal negative', () => {
  expect(Converters.fahrenheitToCelsius(-100.5)).toBe(-74);
});

test('fahrenheit zero', () => {
  expect(Converters.fahrenheitToCelsius(0)).toBe(-18);
});

test('fahrenheit invalid negative', () => {
  expect(Converters.fahrenheitToCelsius(-500)).toBe("invalid");
});

test('fahrenheit invalid string', () => {
  expect(Converters.fahrenheitToCelsius('string')).toBe("invalid");
});

test('fahrenheit invalid object', () => {
  expect(Converters.fahrenheitToCelsius({})).toBe("invalid");
});

test('fahrenheit invalid array', () => {
  expect(Converters.fahrenheitToCelsius([])).toBe("invalid");
});

test('fahrenheit invalid null', () => {
  expect(Converters.fahrenheitToCelsius(null)).toBe("invalid");
});

test('fahrenheit invalid undefined', () => {
  expect(Converters.fahrenheitToCelsius(undefined)).toBe("invalid");
});

test('fahrenheit invalid NaN', () => {
  expect(Converters.fahrenheitToCelsius(NaN)).toBe("invalid");
});

