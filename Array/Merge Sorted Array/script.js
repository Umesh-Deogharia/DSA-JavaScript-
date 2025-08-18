let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] < nums2[p2]) {
            nums1[i] = nums2[p2];
            p2--;
        } else {
            nums1[i] = nums1[p1]
            p1--;
        }
    }

    return nums1;
};

// or

// var merge = function (nums1, m, nums2, n) {
//     let nums1Copy = nums1.slice(0, m);
//     let p1 = 0, p2 = 0;
//     for (let i = 0; i < m + n; i++) {
//         if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
//             nums1[i] = nums1Copy[p1];
//             p1++;
//         } else {
//             nums1[i] = nums2[p2];
//             p2++;
//         }
//     }
//     return nums1;
// };

console.log(merge(nums1, m, nums2, n));