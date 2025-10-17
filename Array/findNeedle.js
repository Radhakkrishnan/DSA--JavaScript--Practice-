// 🔍 Function to find "needle" in a given array (haystack)
function findNeedle(haystack) {
  // Loop through each element in the array
  for (let i = 0; i < haystack.length; i++) {
    
    // Check if the current element is "needle"
    if (haystack[i] === "needle") {
      
      // Return the formatted string with the position (index)
      return `found the needle at position ${i}`;
    }
  }

  // Optional: if "needle" is not found, return a message
  return "needle not found in the haystack";
}

// ✅ Example usage:
console.log(findNeedle(["hay", "junk", "needle", "more junk"]));
// Output: "found the needle at position 2"
