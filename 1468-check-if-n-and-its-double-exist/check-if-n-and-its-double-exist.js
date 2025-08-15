/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let found = false
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == 2 * arr[j] &&  i !== j) {
                found = true
                return found
                break
            } else {
                continue
            }
        }
    }

    if (found == false) {
        return false
    }

};