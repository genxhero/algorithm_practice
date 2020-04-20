const addTwoNumbers = (l1, l2) => {
    const firstNum = listToInt(l1);
    const secondNum = listToInt(l2);
    const sum = firstNum + secondNum;
    return intToList(sum);
};

const listToInt = (linkedList) => {
    let listValue = parseValue(linkedList);
    return BigInt(`${listValue}`.split("").reverse().join(""));
}

const intToList = (num) => {
    const arr = `${num}`.split("").map(digit => parseInt(digit));
    let newList = arr.reduce((nextNode, val) => {
        let node = new ListNode(val);
        node.next = nextNode;
        return node;
    }, null);
    console.log(arr);
    return newList;
}

const parseValue = linkedList => {
    return linkedList.next === null ? linkedList.val.toString() : linkedList.val.toString() + parseValue(linkedList.next).toString();
}