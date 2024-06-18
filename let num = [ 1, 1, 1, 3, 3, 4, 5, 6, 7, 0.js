const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];
let count = '0';
  function countInArray(array, what) {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
          if (array[i] === what) {
              count++;
          }
      }
      return count;
  }

  //for (var i = 0; arr.length > i; i++) {}

        function foo (array) {
          let a = [],
            b = [],
            prev;
        
          arr.sort();
          for (let element of arr) {
            if (element !== prev) {
              a.push(element);
              b.push(1);
            }
            else ++b[b.length - 1];
            prev = element;
          }
        
          return [a, b];
        }
        
        const result = foo(arr);
        console.log('[' + result[0] + ']','[' + result[1] + ']')
        console.log(arr)

    /*
    for (y = 0; y < arr.Length; y++){
        if (arr[y] == i)
            count + i;
    }
}



//For displaying output only            
for (i = 0; i < 10; i++) {
    console.log("Number " + i + " appears " + count[i] + " times");
}
//console.log(arr.sort(function(a, b){return a - b}));


for (i = 0;arr.length > i ;i++) {

}
*/