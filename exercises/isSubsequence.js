// Function to check whether `str1` is a subsequence of `str2`
// A subsequence means all characters of `str1` appear in `str2`
// in the same order
const isSubsequence = (str1, str2) => {

    // Pointer for traversing str1
    let i = 0;

    // Pointer for traversing str2
    let j = 0;

    // Iterate through str2 while comparing characters
    while (j < str2.length) {

        // If current characters match,
        // move pointer in str1 to check the next character
        if (str1[i] === str2[j]) {
            i++;
        }

        // Always move pointer in str2 forward
        j++;

        // If all characters of str1 have been matched,
        // str1 is a subsequence of str2
        if (i === str1.length) {
            return true;
        }
    }

    // If the loop ends without matching all characters,
    // str1 is not a subsequence of str2
    return false;
};

// Example usage
isSubsequence("hello", "helo anime"); // false
