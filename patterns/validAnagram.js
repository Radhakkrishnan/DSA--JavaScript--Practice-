/**
 * Checks if two strings are valid anagrams of each other.
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * using all the original letters exactly once (i.e., same characters with same frequencies).
 * 
 * @param {string} str1 - The first input string.
 * @param {string} str2 - The second input string.
 * @returns {boolean} - True if str1 and str2 are anagrams, false otherwise.
 * 
 * Time Complexity: O(n) - where n is the length of the strings (two passes for building maps + one for comparisons).
 * Space Complexity: O(1) - since we use objects for frequency (limited by charset, e.g., 26 letters for English).
 * 
 * Example:
 * validAnagram("anagram", "naagram") // true
 * validAnagram("rat", "car") // false
 * validAnagram("a", "ab") // false (length mismatch)
 */
const validAnagram = (str1, str2) => {
    // Early exit: Anagrams must have the same length. This is a quick O(1) check.
    if (str1.length !== str2.length) {
        return false;
    }

    // Initialize frequency counter objects (hash maps) for each string.
    // This is the core of the Frequency Counter pattern: Track occurrences of each character.
    let str1Freq = {};
    let str2Freq = {};

    // First loop: Build frequency map for str1.
    // Iterate over each character (val) and increment its count.
    // Uses logical OR (|| 0) to default to 0 if key doesn't exist yet.
    for (let val of str1) {
        str1Freq[val] = (str1Freq[val] || 0) + 1;
    }

    // Second loop: Build frequency map for str2 (same logic as above).
    for (let val of str2) {
        str2Freq[val] = (str2Freq[val] || 0) + 1;
    }

    // Debug logs: Output the frequency maps (remove in production for cleaner code).
    console.log(str1Freq);
    console.log(str2Freq);

    // Third loop: Compare frequencies for every key (character) in str1Freq against str2Freq.
    // If any count doesn't match (including missing keys, where undefined == 0 implicitly fails),
    // it's not an anagram → return false.
    // Note: We need two loops for full coverage (str1 extras vs. str2 extras).
    for (let key in str1Freq) {
        if (str1Freq[key] !== str2Freq[key]) {  // Strict inequality for safety (numbers or undefined).
            return false;
        }
    }

    // Fourth loop: Compare frequencies for every key in str2Freq against str1Freq.
    // Catches cases where str2 has characters not in str1 (or different counts).
    // for (let key in str2Freq) {
    //     if (str2Freq[key] !== str1Freq[key]) {
    //         return false;
    //     }
    // }

    // If all checks pass, the strings have identical character frequencies → valid anagram.
    return true;
};

// Test the function.
console.log(validAnagram("anagram", "naaagrm"));  // Expected: true