
// dropdown jumlah
const boxJumlah = document.querySelector('#box-jumlah');
const barJumlah = document.querySelector('#bar-jumlah');
const pJumlah = document.querySelector('#p-jumlah');

boxJumlah.addEventListener('click', () => {
  const chevronDown = document.querySelector('.chevron-down-jumlah');

  barJumlah.classList.toggle('hidden');
  barJumlah.classList.toggle('active');

  if (barJumlah.classList.contains('active')) {
    pJumlah.classList.add('hidden');
    chevronDown.classList.add('active-rotate');
  } else if (barJumlah.classList.contains('hidden')) {
    pJumlah.classList.remove('hidden');
    chevronDown.classList.remove('active-rotate');
  }
});

// dropdown ikhtisar material
const ikhtisar = document.querySelector('#ikhtisar');
const material = document.querySelector('#material');

ikhtisar.addEventListener('click', () => {
  const ikhtisarParagraf = document.querySelector('#ikhtisar-paragraf');
  const chevronDown = document.querySelector('.chevron-down-ikhtisar');
  
  ikhtisarParagraf.classList.toggle('hidden');
  chevronDown.classList.toggle('active-rotate');
  
});

material.addEventListener('click', () => {
  const materialParagraf = document.querySelector('#material-paragraf');
  const chevronDown = document.querySelector('.chevron-down-material');

  materialParagraf.classList.toggle('hidden');
  chevronDown.classList.toggle('active-rotate');
}); 

