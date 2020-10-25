module.exports = function check(str, bracketsConfig) {
    let pairsOfBrackets = Object.fromEntries(bracketsConfig);
    let stack = [];
    let elements = str.split("");

    for (let element of elements) {
        console.log(stack)
        if (stack[stack.length - 1] === element) {
            console.log(element,'pop')
            stack.pop();
        } else if (pairsOfBrackets[element]) {
            console.log(element,'push',pairsOfBrackets[element])
            stack.push(pairsOfBrackets[element]);
        } else {
            console.log('return false')
            return false;
        }
    }
console.log('stack',stack,stack.length)
    return stack.length === 0;
};
