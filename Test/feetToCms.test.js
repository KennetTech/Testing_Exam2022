import Converters from '../Client/ConvertersTest.js';

// run singluar test npm test -t feetToCms.test.js

document.body.innerHTML =
  '<div> <span id="cmsOutput" /></div>';

test('feet upper', () => {
  expect(Converters.feetToCms(1000)).toBe(30480);
});

test('feet infinity', () => {
  expect(Converters.feetToCms(Infinity)).toBe(Infinity);
});

test('feet negative infinity', () => {
  expect(Converters.feetToCms(-Infinity)).toBe("invalid");
});

test('feet decimal', () => {
  expect(Converters.feetToCms(100.5)).toBe(3063);
});

test('feet invalid zero', () => {
  expect(Converters.feetToCms(0)).toBe("invalid");
});

test('feet invalid negative', () => {
  expect(Converters.feetToCms(-10)).toBe("invalid");
});

test('feet invalid string', () => {
  expect(Converters.feetToCms('string')).toBe("invalid");
});

test('feet invalid object', () => {
  expect(Converters.feetToCms({})).toBe("invalid");
});

test('feet invalid array', () => {
  expect(Converters.feetToCms([])).toBe("invalid");
});

test('feet invalid null', () => {
  expect(Converters.feetToCms(null)).toBe("invalid");
});

test('feet invalid undefined', () => {
  expect(Converters.feetToCms(undefined)).toBe("invalid");
});

test('feet invalid NaN', () => {
  expect(Converters.feetToCms(NaN)).toBe("invalid");
});

