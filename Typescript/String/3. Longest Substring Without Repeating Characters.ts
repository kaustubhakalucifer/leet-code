/*
    Given a string s, find the length of the longest
    substring without repeating characters.
 */

function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let result = 0;
    for(let i=0;i<n;i++) {
        var visited = new Array(256);
        for(let j=i;j<n;j++) {
            if(visited[s.charCodeAt(j)] == true)
                break;
            else {
                result = Math.max(result, j-i+1);
                visited[s.charCodeAt(j)] = true;
            }
        }
    }
    return result
}

lengthOfLongestSubstring("abcabcbb");
