const strings = ["flower", "flow", "flight"];

const longestCommonPrefix = (strings) => {
    if (!strings || strings.length === 0) {
        return "";
    }

    let prefix = strings[0];
    let i = 0;

    while (strings.every(str => str[i] === prefix[i])) {
        i++;
    }

    return prefix.substring(0, i);
}

console.log(longestCommonPrefix(strings))