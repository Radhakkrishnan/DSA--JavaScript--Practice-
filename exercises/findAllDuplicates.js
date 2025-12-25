// Function to find all elements that appear exactly twice in an array
// Uses the frequency counter pattern to achieve O(n) time complexity
const findAllDuplicates = (arr) => {

    // Object to store the frequency of each element in the array
    let freqCh = {};

    // Array to store elements that appear exactly twice
    let newArr = [];

    // Step 1: Build the frequency counter
    // Count how many times each element appears in the array
    for (let ch of arr) {
        freqCh[ch] = (freqCh[ch] || 0) + 1;
    }

    // Step 2: Iterate over the frequency object
    // Identify elements that appear exactly twice
    for (let key in freqCh) {
        if (freqCh[key] === 2) {
            // Convert key back to Number since object keys are strings
            newArr.push(Number(key));
        }
    }

    // Return the array of duplicate elements
    return newArr;
};

// Example usage
findAllDuplicates([1, 2, 3, 3, 4, 4]); // [3, 4]
