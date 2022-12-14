import Converters from '../Client/ConvertersTest.js';

// run singular test npm test -t milliliterToOunce.test.js

document.body.innerHTML =
  '<div> <span id="ozOutput" /></div>';

test('milliliter upper', () => {
  expect(Converters.milliliterToOunce(1000)).toBe(34);
});

test('milliliter infinity', () => {
  expect(Converters.milliliterToOunce(Infinity)).toBe(Infinity);
});

test('milliliter decimal', () => {
  expect(Converters.milliliterToOunce(100.5)).toBe(3);
});

test('milliliter invalid zero', () => {
  expect(Converters.milliliterToOunce(0)).toBe("invalid");
});

test('milliliter invalid negative', () => {
  expect(Converters.milliliterToOunce(-10)).toBe("invalid");
});

test('milliliter invalid string', () => {
  expect(Converters.milliliterToOunce('string')).toBe("invalid");
});

test('milliliter invalid object', () => {
  expect(Converters.milliliterToOunce({})).toBe("invalid");
});

test('milliliter invalid array', () => {
  expect(Converters.milliliterToOunce([])).toBe("invalid");
});

test('milliliter invalid null', () => {
  expect(Converters.milliliterToOunce(null)).toBe("invalid");
});

test('milliliter invalid undefined', () => {
  expect(Converters.milliliterToOunce(undefined)).toBe("invalid");
});

test('milliliter invalid NaN', () => {
  expect(Converters.milliliterToOunce(NaN)).toBe("invalid");
});


