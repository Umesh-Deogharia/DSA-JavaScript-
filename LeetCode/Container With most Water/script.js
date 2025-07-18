// Container With Most Water(Link: https://leetcode.com/problems/container-with-most-water/description/)
// video reference: https://youtu.be/EbkMABpP52U?si=-oR_XI6PdAyK4oin(Apna College)

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
    let ans = 0;
    let lp = 0;
    let rp = height.length - 1;
    while (lp < rp) {
        let width = rp - lp;
        let ht = Math.min(height[rp], height[lp]);
        let area = width * ht;
        ans = Math.max(ans, area);
        height[lp] < height[rp] ? lp++ : rp--;
    }
    return ans;
};

console.log(maxArea(height));