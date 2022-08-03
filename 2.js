let x = 'a';
block: {
  if (typeof x !== 'number', 'boolean', 'string') {
    console.log('X - ' + typeof x);
  }
  else {
    console.log('Тип x не определён');
  }
}