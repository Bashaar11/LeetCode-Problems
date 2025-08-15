/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let squares = []
    for (let i = 0; i < nums.length; i++) {
        squares.push(Math.pow(nums[i], 2))
    }

    let minNums = [2]

    squares.sort((a, b) => a - b);
    return squares
};