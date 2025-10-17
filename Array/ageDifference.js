// 🧮 Function: differenceInAges
// Given an array of ages, returns an array containing:
// [youngest age, oldest age, difference between oldest and youngest]

function differenceInAges(ages) {
  // ⚙️ Sort the array in ascending numerical order
  // NOTE: By default, JS sort() converts numbers to strings ("10" < "2")
  // So we must use a compare function (a - b) to ensure proper numeric sorting
  let sortedArr = ages.sort((a, b) => a - b);

  // 👶 Get the first element after sorting — the youngest age
  let youngestAge = sortedArr[0];

  // 👴 Get the last element — the oldest age
  let oldestAge = sortedArr[sortedArr.length - 1];

  // ➗ Calculate the age difference
  let ageDiff = oldestAge - youngestAge;

  // 📦 Return result as an array: [youngest, oldest, difference]
  return [youngestAge, oldestAge, ageDiff];
}

// ✅ Example usage:
console.log(differenceInAges([82, 15, 6, 38, 35])); 
// Output → [6, 82, 76]
