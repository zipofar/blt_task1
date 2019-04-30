import calc from './calculator';

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
    alert(res);
  });
};

init();
