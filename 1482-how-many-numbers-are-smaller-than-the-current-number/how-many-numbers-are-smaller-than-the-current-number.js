/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let nums2 = [...nums]

    let lengthArray = []
    for (let i = 0; i < nums.length; i++) {
        let numsLength = 0
        for (let j = 0; j < nums2.length; j++) {
            if (nums[i] > nums2[j]) {
                numsLength++
            }
        }
        lengthArray.push(numsLength)
    }

    return lengthArray
};