import Converters from '../Client/ConvertersTest.js';

// run singluar test npm test -t celsiusToFahrenheit.test.js

document.body.innerHTML =
  '<div> <span id="fhtOutput" /></div>';

test('celsius minimum', () => {
  expect(Converters.celsiusToFahrenheit(-273)).toBe(-459);
});

test('celsius upper', () => {
  expect(Converters.celsiusToFahrenheit(5778)).toBe(10432);
});

test('celsius zero', () => {
  expect(Converters.celsiusToFahrenheit(0)).toBe(32);
})

test('celsius positive', () => {
  expect(Converters.celsiusToFahrenheit(10)).toBe(50);
})

test('celsius negative', () => {
  expect(Converters.celsiusToFahrenheit(-10)).toBe(14);
})

test('celsius decimal', () => {
  expect(Converters.celsiusToFahrenheit(10.5)).toBe(51);
})

test('celsius decimal negative', () => {
  expect(Converters.celsiusToFahrenheit(-10.5)).toBe(13);
})

test('celsius Infinity', () => {
  expect(Converters.celsiusToFahrenheit(Infinity)).toBe(Infinity);
})

test('celsius invalid -Infinity', () => {
  expect(Converters.celsiusToFahrenheit(-Infinity)).toBe("invalid");
})

test('celsius invalid string', () => {
  expect(Converters.celsiusToFahrenheit('string')).toBe("invalid");
})

test('celsius invalid object', () => {
  expect(Converters.celsiusToFahrenheit({})).toBe("invalid");
})

test('celsius invalid array', () => {
  expect(Converters.celsiusToFahrenheit([])).toBe("invalid");
})

test('celsius invalid null', () => {
  expect(Converters.celsiusToFahrenheit(null)).toBe("invalid");
})

test('celsius invalid undefined', () => {
  expect(Converters.celsiusToFahrenheit(undefined)).toBe("invalid");
})

test('celsius invalid NaN', () => {
  expect(Converters.celsiusToFahrenheit(NaN)).toBe("invalid");
})



