const button= document.querySelectorAll('button');
const operation= document.querySelector('.operation-button');
const result=document.querySelector('.output input');
const equal=document.getElementById('equal');



button.forEach(button => {
    button.addEventListener('click', () => {
      if (button.id === 'clear') {
        result.value = '0';
      } else if (button.id === 'delete') {
        result.value = result.value.slice(0, -1);
      } else if (button.id === 'percent') {
        result.value = eval(result.value) / 100;
      } else if (button.id === 'equal') {
        result.value = eval(result.value);
      } else {
        if (result.value === '0') {
          result.value = button.textContent;
        } else {
          result.value += button.textContent;
        }
      }
    });
  });

 //mathematical execution
 equal.addEventListener('click',() =>{
    const expression= result.value ; 
    const resultValue= eval(expression);
    result.value = resultValue;


 });
 

