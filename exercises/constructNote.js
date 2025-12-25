// Function to check whether a message can be constructed
// using the given set of letters
const constrctNote = (msg, str) => {

    // Step 1: Create a frequency counter for the available letters
    // This object stores how many times each character appears in `str`
    let freqStr = {};

    for (let ch of str) {
        freqStr[ch] = (freqStr[ch] || 0) + 1;
    }

    // Step 2: Iterate over each character in the message
    for (let ch of msg) {

        // If the character is not available in `freqStr`
        // or its count has already been exhausted,
        // the message cannot be constructed
        if (!freqStr[ch]) {
            console.log("false");
            return false;
        }

        // Use one occurrence of the character
        freqStr[ch]--;
    }

    // If all characters in the message were successfully matched,
    // the message can be constructed from the given letters
    console.log("true");
    return true;
};

// Example usage
constrctNote("image", "abcdegi");
