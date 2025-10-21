// * Problem:
//  * Given a sorted array 'nums', remove the duplicates in-place such that
//  * each unique element appears only once. The relative order should be kept the same.
//  *
//  * The function returns 'k', the count of unique elements.
//  * After the function, the first 'k' elements in 'nums' will be unique.
//  *
//  * Example:
//  * Input: nums = [1,1,2]
//  * Output: 2, nums = [1,2,_]
//  *

var removeDuplicates = function(nums) {
    // Edge case: if array is empty, there are no unique elements
    if (nums.length === 0) return 0;

    let i = 0; // 'i' acts as a slow pointer (tracks the position for unique elements)

    // Start from index 1 because the first element is always unique
    for (let j = 1; j < nums.length; j++) { // 'j' acts as a fast pointer (scans the array)
        
        // When a new unique element is found
        if (nums[i] !== nums[j]) {
            i++;              // Move slow pointer forward
            nums[i] = nums[j]; // Place the unique element at the next position
        }
    }

    // 'i' is index-based, so total unique count = i + 1
    return i + 1;
};