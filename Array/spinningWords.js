/*
 * Problem: "Spin Words" (Codewars)
 * --------------------------------
 * Write a function that takes in a string of one or more words
 * and returns the same string, but with all words that have
 * five or more letters reversed.
 * 
 * Example:
 * spinWords("Hey fellow warriors") ➜ "Hey wollef sroirraw"
 *
 * Notes:
 * - Input will contain only letters and spaces.
 * - There will be at least one word in the input string.
 */

/*
 * 🔍 Explanation:
 * In the first version, I used console.log() to print each word.
 * That works for checking output manually, but the function
 * itself didn’t RETURN anything — so automated tests failed.
 *
 * Fix:
 * We collect all processed words inside an array and return
 * the final result as a single string.
 */

function spinWords(string) {
  // Split the input string into an array of words
  let stringArr = string.split(" ");

  // This array will store the processed (reversed or original) words
  let result = [];

  // Loop through each word in the array
  for (let s of stringArr) {
    // Check if the word length is 5 or more
    if (s.length >= 5) {
      // Split the word into characters, reverse them, and join back
      let reversedString = s.split("").reverse().join("");
      // Add the reversed word to the result array
      result.push(reversedString);
    } else {
      // If the word is shorter than 5 letters, keep it as it is
      result.push(s);
    }
  }

  // Join all processed words back into a single string with spaces
  return result.join(" ");
}

/*
 * ✅ Key Takeaways:
 * - console.log() is only for printing (not returning values).
 * - Always return the final computed result from your function.
 * - Keep logic simple and readable — it helps in debugging later.
 */


function spinWords(string){
  let stringArr = string.split(" ");
  for (let s of stringArr){
    if(s.length >= 5){
      let reversedString = s.split("").reverse().join("");
      console.log(reversedString);  // ❌ Printed instead of returning
    } else {
      console.log(s);
    }
  }
}
// This version prints each word but doesn’t return a final string,
// so the function’s return value is 'undefined'.


