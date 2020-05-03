
//Array to integer

const myAtoi = str => {

        const numerals = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, "-": true, "+": true };
        const newStr = str.trim();
        if (newStr.length === 1) {
            if (newStr[0] === '-' || newStr[0] === "+") {
                return 0
            }
        }
        if (!numerals[newStr[0]]) {
            return 0;
        }

        if (["-", "+"].includes(newStr[0]) && ["-", "+"].includes(newStr[1])) {
            return 0;
        }


        let chars = [];
        for (let i = 0; i < newStr.length; i++) {
            if (numerals[newStr[i]]) {
                chars.push(newStr[i]);
            } else {
                break;
            }
        }

        const newNum = parseInt(chars.join(''));
        if (newNum > 2147483647) {
            return 2147483647;
        } else if (newNum < -2147483647) {
            return -2147483648;
        } else if (isNaN(newNum)) {
            return 0;
        } else {
            return newNum;
        }

}