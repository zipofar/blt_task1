const getCountDigitsAfterComma = (num) => {
  const numAfterComma = String(num).split('.')[1];
  if (typeof numAfterComma === 'undefined') {
    return 0;
  }
  return numAfterComma.length;
};

const calc = (val1, val2) => {
  const n1 = parseFloat(val1);
  const n2 = parseFloat(val2);
  const countDigitsAfterComma = Math.max(
    getCountDigitsAfterComma(n1),
    getCountDigitsAfterComma(n2),
  );
  const sum = n1 + n2;
  return sum.toFixed(countDigitsAfterComma);
};

export default calc;
