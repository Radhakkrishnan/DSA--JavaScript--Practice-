/**
 * Counts the number of unique values in a sorted array and modifies the array in-place
 * to contain the unique values at the beginning (duplicates are shifted to the end).
 * 
 * Assumptions:
 * - The input array `arr` is sorted in ascending order.
 * - If the array is not sorted, this will not correctly count uniques (use a Set or sort first).
 * 
 * Time Complexity: O(n) - Single pass through the array.
 * Space Complexity: O(1) - In-place modification, no extra space.
 * 
 * Edge Cases Handled:
 * - Empty array: Returns 0.
 * - Single element: Returns 1.
 * - All duplicates: Returns 1.
 * - All unique: Returns arr.length.
 * - Mix of duplicates and uniques: Correctly shifts and counts.
 * 
 * Example:
 * Input: [1, 1, 2, 3, 3]
 * Output: 3 (array becomes [1, 2, 3, 3, 3])
 * 
 * @param {Array} arr - The sorted array to process.
 * @returns {number} The count of unique values.
 */
function countUniqueValues(arr) {
  // Handle empty array upfront
  if (arr.length === 0) return 0;
  
  // Initialize two pointers:
  // i: Points to the last known unique element's position
  // j: Scans ahead for the next potential unique
  let i = 0;
  let j = 1;
  
  // Traverse the array with j until we reach the end
  while (j < arr.length) {
    // If current elements are duplicates, skip j forward
    if (arr[i] === arr[j]) {
      j++;
    } else {
      // Found a new unique: Move i forward and copy the new value to overwrite duplicates
      i++;
      arr[i] = arr[j];
      // Advance j to continue scanning
      j++;
    }
  }
  
  // The number of uniques is the position after the last unique (i+1)
  return i + 1;
}