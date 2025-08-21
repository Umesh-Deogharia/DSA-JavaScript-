// 136. Single Number link:-

let nums = [4, 1, 2, 1, 2]; // Output = 4

// Hash Table Approach

var singleNumber = function (nums) {
    let hash = [];
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
};
singleNumber(nums)

//                          or

// Bitwise XOR Best Approach

var singleNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
 
};
singleNumber(nums)

