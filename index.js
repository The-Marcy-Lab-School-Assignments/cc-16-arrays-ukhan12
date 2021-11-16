//write your code here

function replaceWithYerr(arr, start, num){
  let newArray = [];
 
 
 
   for(let i = 0; i < arr.length; i++){
     newArray.push(arr[i]);
  }

for(let i = start; i <= num; i++){
      newArray[i] = "yerr";
     }
 
  return newArray;
}
