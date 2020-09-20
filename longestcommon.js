const user0 = ["/start", "/green", "/blue", "/pink", "/register", "/orange", "/one/two"];
var user1 = ["/start", "/pink", "/register", "/orange", "/red", "a"];
var user2 = ["a", "/one", "/two"];
var user3 = ["/pink", "/orange", "/yellow", "/plum", "/blue", "/tan", "/red", "/amber", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow", "/BritishRacingGreen"];
var user4 = ["/pink", "/orange", "/amber", "/BritishRacingGreen", "/plum", "/blue", "/tan", "/red", "/lavender", "/HotRodPink", "/CornflowerBlue", "/LightGoldenRodYellow"];
var user5 = ["a"];

const findContiguousHistory = (userA, userB) => {
  const subArrayA = findSubArrays(userA);
  const subArrayB = findSubArrays(userB);
  // [ {key: ["/start", "/green", "/blue"], value: 3 } ]
  const hasBoth = [];
  for (i < 0; i < subArrayB.length; i++) {
    if (subArrayA.includes(subArrayB[i])) {
      hasBoth.push(subArrayB[i])
    }
  }
  return findMaxByLength(hasBoth);
}

const findSubArrays = array => {
    //Finds sub arrays of various lengths using the window method
    let length = 1;
    let res = [array];
    while (length < array.length) {   
      for (let start = 0; start < array.length; start++) {
        let current = array.slice(start, length);
        if (current.length > 0) {res.push(current)}
      } 
      length += 1
    }
    return res;
}

console.log(findSubArrays(user1))
//["/start", "/pink", "/register", "/orange", "/red", "a"];

// const findMaxByLength = arrayOfObjects => {
//   for (let i)
// }