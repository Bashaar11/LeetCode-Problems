/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
let found = []

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums.length == 1) {
            return nums[0]
            found.push(nums[0])
            break
        } else if (i != j) {
            if (nums[i] == nums[j]) {
                found.push(nums[i])
            }
        }
    }
}

let uniqueToArr1 = nums.filter(element => !found.includes(element))

return Number(uniqueToArr1)
};