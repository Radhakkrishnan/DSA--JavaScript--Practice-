var longestCommonPrefix = function(strs) {
    // Step 1: Assume the entire first string is our prefix.
    // Thought: we'll gradually shorten this as we compare with other strings.
    let prefix = strs[0];
    
    // Step 2: Loop through the rest of the strings.
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];       // current string to compare
        let tempPrefix = "";     // stores the matching part of prefix so far
        
        // Step 3: Compare characters of current string and current prefix.
        // NOTE: you need both string lengths in the condition.
        for (let j = 0; j < str.length && j < prefix.length; j++) {
            if (prefix[j] === str[j]) {
                // Characters match — add to temporary prefix
                tempPrefix += prefix[j];
            } else {
                // Mismatch found — stop comparing further
                break;
            }
        }

        // Step 4: Update prefix to the matched part
        prefix = tempPrefix;

        // Step 5: If prefix becomes empty, no need to continue — no common prefix
        if (prefix === "") {
            return "";
        }
    }
    
    // Step 6: After looping through all strings, prefix is our final result
    return prefix;
};
