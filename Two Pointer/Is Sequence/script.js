// Leetcode 392: Is Subsequence
// Description: Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// Example: s = "abc", t = "ahbgdc" => true
// Link: https://leetcode.com/problems/is-subsequence/

    let s = "abc", t = "ahbgdc";
var isSubsequence = function (s, t) {
    let left = 0;
    // let right = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[left] == t[i]) {
            left++
        }
    }
    return left == s.length;
};

isSubsequence(s,t)