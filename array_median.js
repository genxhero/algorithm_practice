const findMedianSortedArrays = (nums1, nums2) => {
    const newNums = nums1.concat(nums2).sort((a, b) => { return a - b });
    console.log(newNums)
    if (newNums.length % 2 === 0) {
        const mid1 = newNums[newNums.length / 2];
        const mid2 = newNums[newNums.length / 2 - 1];
        return parseFloat((mid1 + mid2) / 2);
    } else {
        return newNums[Math.floor(newNums.length / 2)]
    }

};