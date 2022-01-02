function evklid(n) {
  let array = [];
  for (let i = 0, j = 2; i <= n; i++, j++) {
    array[i] = j;
  }
  
  function fn(indexP, array) {
    let newArray = [...array.slice(0, indexP), array[indexP]];
  
    for (let i = indexP + 1; i < array.length; i++) {
      if (array[i] % array[indexP] !== 0) {
        newArray.push(array[i]);
      }
    }
  
    if (newArray[indexP + 1]) {
      return fn(indexP + 1, newArray);
    }
  
    return newArray;
  }

  return fn(0, array);
}
