//write your code here

function replaceWithYerr(arr, start, num){
  let newArray = [];
 
 for(let i = start; i <= num; i++){
      arr[i] = "yerr";
     }
 
   for(let i = 0; i < arr.length; i++){
     newArray.push(arr[i]);
  }

 
  return newArray;
}
