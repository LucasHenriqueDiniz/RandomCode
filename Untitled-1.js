let str = ""

const X = str.match(/x/gi);
const O = str.match(/o/gi);

function teste(X, O) {

  if (X === null || O === null) {
    if (X === O) {
      return true
    } else {
      return false
    }
  } else {
    return (X.length === O.length)
  }
}


console.log(teste(X, O));

/*
function XO(str) {
const X = str.match(/x/gi);
const O = str.match(/o/gi);
let i = '0'
  
  console.log (str);
  console.log(X.lenght === O.lenght)
  
  if (X === null || O === null) {
    if (X === O) {
      return true
    } else {
      return false  
    }
  } else { return X.lenght === O.lenght } 
} 
*/