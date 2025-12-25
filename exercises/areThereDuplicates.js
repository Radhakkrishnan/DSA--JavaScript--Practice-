// Function to check whether there are duplicate values
// Accepts a variable number of arguments using rest parameters
const areThereDuplicates = (...args) => {

    // Step 1: Sort the arguments
    // Sorting groups identical values next to each other
    // This allows us to detect duplicates by comparing adjacent elements
    args.sort();

    // Step 2: Initialize two pointers
    // lP (left pointer) starts at index 0
    // rP (right pointer) starts at index 1
    let lP = 0;
    let rP = 1;

    // Step 3: Traverse the array using the two pointers
    // We only need to compare adjacent elements because the array is sorted
    while (rP < args.length) {

        // If two adjacent elements are equal,
        // a duplicate exists, so return true immediately
        if (args[lP] === args[rP]) {
            console.log("true");
            return true;
        }

        // Move both pointers forward to compare the next pair
        lP++;
        rP++;
    }

    // If the loop completes without finding duplicates,
    // it means all values are unique
    console.log("false");
    return false;
};

// Example usage
areThereDuplicates(1, 2, 2, 3, 4, 5);
