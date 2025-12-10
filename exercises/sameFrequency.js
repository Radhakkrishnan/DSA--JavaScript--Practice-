/**
 * sameFrequency(num1, num2)
 * Return true if num1 and num2 contain the same digits
 * with the same frequencies. Assumes non-negative integers.
 *
 * Time: O(N) where N is number of digits
 * Space: O(1) (bounded frequency map of digits)
 */
const sameFrequency = (num1, num2) => {
  // Convert to strings to iterate digits
  const str1 = String(num1);
  const str2 = String(num2);

  // Quick length check: different lengths => cannot have same digit frequencies
  if (str1.length !== str2.length) return false;

  // Build frequency map for digits in str1
  const freqMap = {};
  for (const ch of str1) {
    // If digit key absent, treat as 0 then add 1
    freqMap[ch] = (freqMap[ch] || 0) + 1;
  }

  // Decrease counts while scanning str2; if any digit is missing or overused, return false
  for (const ch of str2) {
    // Intent: fail when no remaining occurrences are available
    if (!(freqMap[ch] > 0)) return false;
    freqMap[ch] -= 1;
  }

  // If we never returned false, frequencies match exactly
  return true;
};
sameFrequency(182, 281);        // true
sameFrequency(34, 14);          // false
sameFrequency(3589578, 5879385);// true
sameFrequency(22, 222);         // false
sameFrequency(112, 211);        // true
sameFrequency(112, 233);        //false