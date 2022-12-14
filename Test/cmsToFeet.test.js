import Converters from '../Client/ConvertersTest.js';

// run singluar test npm test -t cmsToFeet.test.js

document.body.innerHTML =
  '<div><span id="feetOutput" /></div>';

test('cms upper', () => {
  expect(Converters.cmsToFeet(1000)).toBe(33);
});


test('cms infinity', () => {
  expect(Converters.cmsToFeet(Infinity)).toBe(Infinity);
});

test('cms decimal', () => {
  expect(Converters.cmsToFeet(100.5)).toBe(3);
});

test('cms invalid zero', () => {
  expect(Converters.cmsToFeet(0)).toBe("invalid");
});

test('cms invalid negative', () => {
  expect(Converters.cmsToFeet(-10)).toBe("invalid");
});

test('cms invalid string', () => {
  expect(Converters.cmsToFeet('string')).toBe("invalid");
});

test('cms invalid object', () => {
  expect(Converters.cmsToFeet({})).toBe("invalid");
});

test('cms invalid array', () => {
  expect(Converters.cmsToFeet([])).toBe("invalid");
});

test('cms invalid null', () => {
  expect(Converters.cmsToFeet(null)).toBe("invalid");
});

test('cms invalid undefined', () => {
  expect(Converters.cmsToFeet(undefined)).toBe("invalid");
});

test('cms invalid NaN', () => {
  expect(Converters.cmsToFeet(NaN)).toBe("invalid");
});