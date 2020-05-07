

function mergeSort(org) {
    if (org.length == 1) {
        return org;
    }
    let mid = Math.floor(org.length / 2),
        left = org.slice(0, mid),
        right = org.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let lIndex = 0,
        rIndex = 0,
        result = [];
    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] > right[rIndex]) {
            result.push(right[rIndex]);
            rIndex++;
        } else {
            result.push(left[lIndex]);
            lIndex++;
        }
    }
    return result.concat(left.slice(lIndex), right.slice(rIndex));
}