//231 leetcode Power Of Two link:- https://leetcode.com/problems/power-of-two/ 
// Given an integer n, return true if it is a power of two.Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.
var isPowerOfTwo = function (n) {
    if (n == 1) return true;
    else if (n < 1 || n % 2 != 0) return false;
    else return isPowerOfTwo(n / 2);
};
console.log(isPowerOfTwo(16));