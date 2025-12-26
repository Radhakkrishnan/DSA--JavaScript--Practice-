// Function to determine whether there exists a pair of values in a
// sorted array whose average equals the given target
// Uses the multiple pointers pattern for O(n) time complexity
const averagePair = (arr, tar) => {

    // Edge case: an empty array cannot form any pair
    if (arr.length === 0) {
        return false;
    }

    // Initialize two pointers
    // `left` starts from the beginning (smallest value)
    // `right` starts from the end (largest value)
    let left = 0;
    let right = arr.length - 1;

    // Continue searching while there are valid pairs to examine
    // Once left meets or crosses right, all possible pairs are exhausted
    while (left < right) {

        // Calculate the average of the values at the current pointers
        let avg = (arr[left] + arr[right]) / 2;

        // If the average matches the target, a valid pair exists
        if (avg === tar) {
            return true;
        }
        // If the average is too small, move the left pointer right
        // to increase the average
        else if (avg < tar) {
            left++;
        }
        // If the average is too large, move the right pointer left
        // to decrease the average
        else {
            right--;
        }
    }

    // If no pair with the required average is found
    return false;
};
