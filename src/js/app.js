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

const showResult = res => (alert(res));

const init = () => {
  const field1 = document.getElementById('field1');
  const field2 = document.getElementById('field2');
  const btnResult = document.getElementById('btn_result');

  // Init values
  field1.value = 0.1;
  field2.value = 0.2;

  // Add event listener for calc button
  btnResult.addEventListener('click', (e) => {
    e.preventDefault();
    const res = calc(field1.value, field2.value);
    showResult(res);
  });
};

init();
