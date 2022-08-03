const arr6 = [1, 5, 2, 3, 4, 5];

function hasTwins(array){
  return arr6.length !== new Set(arr6).size;
}

console.log(hasTwins(arr6));