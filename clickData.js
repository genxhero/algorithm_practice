const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk",
];

const parseData = (counts) => {
  const result = {};

  for (let i = 0; i < counts.length; i++) {
    let currentCount = parseInt(counts[i].slice(0, counts[i].indexOf(",")));
    let currentString = counts[i].slice(counts[i].indexOf(",") + 1);

    while (currentString) {
      if (currentString === "com") {
        //         console.log(result[currentString])
      }
      if (result[currentString]) {
        result[currentString] += currentCount;
      } else {
        result[currentString] = currentCount;
      }

      if (currentString.includes(".")) {
        currentString = currentString.slice(currentString.indexOf(".") + 1);
      } else {
        currentString = null;
      }
    }
  }
  return result;
};

//  const testoToast  =  "uk".slice( "uk".indexOf(".") + 1)
// console.log(testoToast)
console.log(parseData(counts));
