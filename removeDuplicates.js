const arr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const removeDuplicatesSol1 = (arr) => {
    let newArr = []
    arr.forEach((ele) => {
        if (!newArr.includes(ele)) {
            newArr.push(ele)
        }
    })
    arr = newArr
    return arr
}

const removeDuplicatesSol2 = (arr) => {
    arr = [... new Set(arr)]
    return arr
}

const functionName = process.argv[2];
if (functionName === "first_solution") {
    console.log(removeDuplicatesSol1(arr));
} else if (functionName === "second_solution") {
    console.log(removeDuplicatesSol2(arr));
} else {
    console.log("Invalid function name. Please choose first_solution or second_solution.");
}