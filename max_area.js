/**
 * Finds the max area of  check leetcode
 * 
 * @param {*} height 
 */

const maxArea = (height) => {

    let maxArea = 0;
    let currentWidth = 0;
    let currentHeight = 0;
    let currentArea = 0;

    if (height.length === 2) {
        return Math.min(height[0], height[1]);
    }
    for (let i = 0; i < height.length; i++) {
        for (let j = 1; j < height.length; j++) {
            currentWidth = j - i
            currentHeight = Math.min(height[i], height[j])
            currentArea = currentWidth * currentHeight
            if (currentArea > maxArea) {
                maxArea = currentArea
            }
        }
    }

    return maxArea
};