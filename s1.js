let s1 = 'abbbbbccc';
let s2 = 'ddddzzz';
var Maior
console.log(s1.length)
console.log(s2.length)

// if (s1.length > s2.length) {console.log(s1.length)} else (console.log(s2.length))

//  function GG(s1, s2) {
//     if (s1.length > s2.length) {return s1} else {return s2}
//  }

//  Maior = GG(s1, s2)
Maior = (s1 + s2);
const items = Maior.split('');
const arr = [];
items.sort()
  
  for(var i = 0; i < items.length; i++) {
  if  (items[i] !== items[i - 1]) {
      console.log(items[i], i)
      arr.push(items[i])
  }

}
console.log(arr.toString().replace(/,/g, ""))

// function longest(s1, s2) {

//     function GG(s1, s2) {
//        if (s1.length > s2.length) {return s1} else {return s2}
//     }
   
//    let Maior = GG(s1, s2);
//        console.log(Maior)
//    const items = Maior.split('');
//    const arr = [];
//    items.sort()
       
//        for(var i = 0; i < items.length; i++) {
//        if  (items[i] !== items[i - 1]) {
//            console.log(items[i], i)
//            arr.push(items[i])
//        }
//    }
     
//      console.log(arr.toString().replace(/,/g, ""))
//      return arr.toString().replace(/,/g, "");
     
//      }
