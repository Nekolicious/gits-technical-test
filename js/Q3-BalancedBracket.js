// Reference: https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/
function BalancedBracket(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (const char of str) {
        if (brackets[char]) {
            // If the character is an opening bracket, push the corresponding closing bracket onto the stack
            stack.push(brackets[char]);
        } else if (Object.values(brackets).includes(char)) {
            // If the character is a closing bracket, check if it matches the top of the stack
            if (stack.pop() !== char) {
                return false;
            }
        } else {
            // If the character is not a bracket, return false
            return false;
        }
    }
    return stack.length === 0;
}

function CheckBracket() {
    const str = document.getElementById("bracket").value.trim();
    const result = BalancedBracket(str);

    // console.log(str);
    // console.log(result);

    document.getElementById("bracket_result").innerHTML = result ? "YES" : "NO";
}