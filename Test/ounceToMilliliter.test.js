import Converters from '../Client/ConvertersTest.js';

// run singular test npm test -t ounceToMilliliter.test.js

document.body.innerHTML =
  '<div> <span id="mlOutput" /></div>';

test('ounce upper', () => {
  expect(Converters.ounceToMilliliter(1000)).toBe(29570);
});

test('ounce infinity', () => {
  expect(Converters.ounceToMilliliter(Infinity)).toBe(Infinity);
});

test('ounce decimal', () => {
  expect(Converters.ounceToMilliliter(100.5)).toBe(2972);
});

test('ounce invalid zero', () => {
  expect(Converters.ounceToMilliliter(0)).toBe("invalid");
});

test('ounce invalid negative', () => { 
  expect(Converters.ounceToMilliliter(-10)).toBe("invalid");
});

test('ounce invalid string', () => {
  expect(Converters.ounceToMilliliter('string')).toBe("invalid");
});

test('ounce invalid object', () => {
  expect(Converters.ounceToMilliliter({})).toBe("invalid");
});

test('ounce invalid array', () => {
  expect(Converters.ounceToMilliliter([])).toBe("invalid");
});

test('ounce invalid null', () => {
  expect(Converters.ounceToMilliliter(null)).toBe("invalid");
});

test('ounce invalid undefined', () => {
  expect(Converters.ounceToMilliliter(undefined)).toBe("invalid");
});

test('ounce invalid NaN', () => {
  expect(Converters.ounceToMilliliter(NaN)).toBe("invalid");
});


