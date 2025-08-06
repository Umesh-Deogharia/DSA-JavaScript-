let nums = [2, 2, 1, 1, 1, 2, 2];

var majorityElement = function (nums) {
    let mjelem = Math.floor(nums.length / 2);
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > mjelem) {
            return num;
        }
    }
};


or 

// let nums = [1,2,2,3,2,3,1,5,6];
// var majorityElement = function(nums) {
//   const mjElem = Math.floor(nums.length/2);
//    let map = new Map();
//   let result = null;
//   nums.forEach((elem)=>{
//      map.set(elem,(map.get(elem)||0)+1);
//      if(map.get(elem)>mjElem && result === null){
//     result = elem;
//   }
//   })
//   return result
// };
// console.log(majorityElement(nums))
  

console.log(majorityElement(nums));

// console.log(window);
// console.log(this);
