/**
 * LeetCode 485. Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/ 
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */


var findMaxConsecutiveOnes = function (nums) {
    let curr_count = 0;
    let max_count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            curr_count++;
        }
        else {
            max_count = Math.max(curr_count, max_count);
            curr_count = 0;
        }
    }
    return Math.max(max_count, curr_count);
};


                                        // or
                                    


// function findMaxConsecutiveOnes(nums) {
//     let maxCount = 0;
//     let count = 0;
//     for (let num of nums) {
//         if (num === 1) {
//             count++;
//             maxCount = Math.max(maxCount, count);
//         } else {
//             count = 0;
//         }
//     }
//     return maxCount;
// }

// Example usage:
const arr = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(arr)); // Output: 3