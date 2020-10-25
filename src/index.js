module.exports = function check(str, bracketsConfig) {
    let pairsOfBrackets = Object.fromEntries(bracketsConfig);
    let stack = [];
    let elements = str.split("");

    for (let element of elements) {
        if (stack[stack.length - 1] === element) {
            stack.pop();
        } else if (pairsOfBrackets[element]) {
            stack.push(pairsOfBrackets[element]);
        } else {
            return false;
        }
    }

    return stack.length === 0;
};
