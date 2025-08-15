/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum = 0
    let sumArray = []
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        sumArray.push(sum)
    }
    return sumArray
};