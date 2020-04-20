const twoSum = (nums, target) => {
    const diffPojo = {};
    for (let i = 0; i < nums.length; i++) {
        let el = nums[i];
        if (diffPojo[el] || diffPojo[el] === 0) {
            return [diffPojo[el], i];
        } else {
            diffPojo[target - el] = i;
        }
    }

    return false
};