/**
 * Problem: Two Sum
 * Approach: Brute Force (Nested Loop)
 * Author: Radhakkrishnan C
 * 
 * Explanation:
 * For each element in the array, we check every other element that comes after it.
 * If the sum of the two numbers equals the target, return their indices immediately.
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * Notes:
 * - This is a brute-force solution (not a two-pointer or sliding window approach).
 * - Works well for small arrays; can be optimized later with a hash map.
 */

var twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            let value = n1 + nums[j];
            if (value == target) {
                result.push(i, j);
            }
        }
    }
    return result;
};

/**
 * ⚠️ My Initial (Failed) Attempt
 * 
 * var twoSum = function(nums, target) {
 *     let result = [];
 *     for (let i = 0; i < nums.length; i++) {
 *         let n1 = nums[i];
 *         let n2 = nums[i++]; // ❌ Skips elements by incrementing i twice
 *         let value = n1 + n2;
 *         if (value == target) {
 *             result.push(n1, n2);
 *             return result;
 *         } else {
 *             return; // ❌ Exits the loop too early
 *         }
 *     }
 * };
 * 
 * Problems in the above code:
 * - Used `i++` inside the loop, which caused skipped elements.
 * - Returned too early, preventing full array traversal.
 * - Tried to push actual numbers instead of indices (expected by problem).
 */
