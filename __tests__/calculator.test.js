import calc from '../src/js/calculator';

const testDate = [
  ['1', '1', '2'],
  ['1.1', '1', '2.1'],
  ['1.1', '1.11', '2.21'],
  ['0.1', '0.11', '0.21'],
];

test.each(testDate)(
  'calculator(%s, %s, %s)',
  (n1, n2, expected) => {
    expect(calc(n1, n2)).toBe(expected);
  },
);
