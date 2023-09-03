const boxJumlah = document.querySelector('#box-jumlah');
const barJumlah = document.querySelector('#bar-jumlah');
const pJumlah = document.querySelector('#p-jumlah');

boxJumlah.addEventListener('click', () => {
  const chevronDown = document.querySelector('.chevron-down-jumlah');

  barJumlah.classList.toggle('hidden');
  barJumlah.classList.toggle('active');

  if (barJumlah.classList.contains('active')) {
    pJumlah.classList.add('hidden');
    chevronDown.style = `transform : rotate(180deg);
    transition: .2s ease-in-out`
  } else if (barJumlah.classList.contains('hidden')) {
    pJumlah.classList.remove('hidden');
  }
});

