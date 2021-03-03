let arr = [8,7, 2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1];
function uniqueSorted(arr) {
  let obj = {},
      out=[];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    obj[str] = true; 
  }
     for (i in obj) {
       out.push(i);
     }
     return out; 
result = uniqueSorted(arr);
console.log(result);