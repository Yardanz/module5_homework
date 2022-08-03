test = prompt('Введите значение: ');
test = +test;
console.log(typeof test);
const even_odd = test => !(test % 2);
block: {
  if (isNaN(test)) {
    alert('Упс, кажется, вы ошиблись');
    break block;
  } 
  else {
    if (even_odd(test) === true) {
      console.log('Четное');
  }  
    else {
      console.log('Нечетное');
    }
  }
}