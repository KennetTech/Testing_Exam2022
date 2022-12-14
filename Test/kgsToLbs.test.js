import Converters from '../Client/ConvertersTest.js';

// run singluar test npm test -t kgsToLbs.test.js

document.body.innerHTML =
'<div><span id="lbsOutput" /></div>';

test('kgs upper', () => {
  expect(Converters.kgsToLbs(1000)).toBe(2205);
});

test('kgs infinity', () => {
  expect(Converters.kgsToLbs(Infinity)).toBe(Infinity);
});

test('kgs decimal', () => {
  expect(Converters.kgsToLbs(100.5)).toBe(222);
});

test('kgs invalid zero', () => {
  expect(Converters.kgsToLbs(0)).toBe("invalid");
});

test('kgs invalid negative', () => {
  expect(Converters.kgsToLbs(-10)).toBe("invalid");
});

test('kgs invalid string', () => {
  expect(Converters.kgsToLbs('string')).toBe("invalid");
});

test('kgs invalid object', () => {
  expect(Converters.kgsToLbs({})).toBe("invalid");
});

test('kgs invalid array', () => {
  expect(Converters.kgsToLbs([])).toBe("invalid");
});

test('kgs invalid null', () => {
  expect(Converters.kgsToLbs(null)).toBe("invalid");
});

test('kgs invalid undefined', () => {
  expect(Converters.kgsToLbs(undefined)).toBe("invalid");
});

test('kgs invalid NaN', () => {
  expect(Converters.kgsToLbs(NaN)).toBe("invalid");
});


