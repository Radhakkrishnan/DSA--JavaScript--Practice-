/**
 * Problem:
 * Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place.
 * The order of the elements may be changed, but it doesn’t matter what you leave beyond the returned `k`.
 * Return `k`, the number of elements remaining after removal.
 *
 * Example:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 *
 * Explanation:
 * Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond index k.
 *
 * Approach (Two-Pointer Technique):
 * - Use one pointer (i) to iterate through the array.
 * - Use another pointer (k) to track the position of the next valid (non-val) element.
 * - Each time we find an element not equal to val, we overwrite nums[k] with it and move k forward.
 * - Finally, return k as the count of remaining elements.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * In-place: Yes
 */

var removeElement = function(nums, val) {
    let k = 0; // 'k' points to the index where the next valid element should be placed

    for (let i = 0; i < nums.length; i++) { // 'i' scans through all elements
        if (nums[i] !== val) {              // if current element is not equal to val
            nums[k] = nums[i];              // move it to the front (to index k)
            k++;                            // increment k to next position
        }
    } 

    // 'k' now represents the number of elements not equal to val
    return k;
};
