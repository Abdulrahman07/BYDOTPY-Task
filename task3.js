const set = [3, 34, 4, 12, 5, 2];
const sum = 9;
let foundSubsetSum = false;

const isSubsetSum = (set, sum) => {
    if (sum <= 0) return foundSubsetSum;

    for (let index = 0; index < set.length; index++) {
        if (set.some((e) => sum === set[index] + e)) {
            foundSubsetSum = true;
            break;
        }
    }
    return foundSubsetSum;
}

console.log(isSubsetSum(set, sum));