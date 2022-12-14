import Converters from '../Client/ConvertersTest.js';

// run singular test npm test -t lbsToKgs.test.js

document.body.innerHTML =
  '<div><span id="kgsOutput" /></div>';

test('lbs upper', () => {
  expect(Converters.lbsToKgs(1000)).toBe(454);
});

test('lbs infinity', () => {
  expect(Converters.lbsToKgs(Infinity)).toBe(Infinity);
});

test('lbs decimal', () => {
  expect(Converters.lbsToKgs(100.5)).toBe(46);
});

test('lbs invalid zero', () => {
  expect(Converters.lbsToKgs(0)).toBe("invalid");
});

test('lbs invalid negative', () => {
  expect(Converters.lbsToKgs(-10)).toBe("invalid");
});

test('lbs invalid string', () => {
  expect(Converters.lbsToKgs('string')).toBe("invalid");
});

test('lbs invalid object', () => {
  expect(Converters.lbsToKgs({})).toBe("invalid");
});

test('lbs invalid array', () => {
  expect(Converters.lbsToKgs([])).toBe("invalid");
});

test('lbs invalid null', () => {
  expect(Converters.lbsToKgs(null)).toBe("invalid");
});

test('lbs invalid undefined', () => {
  expect(Converters.lbsToKgs(undefined)).toBe("invalid");
});

test('lbs invalid NaN', () => {
  expect(Converters.lbsToKgs(NaN)).toBe("invalid");
});


