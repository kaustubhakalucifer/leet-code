/*
    Given a string s, return the
    longest palindromic substring
    in s.

    EXAMPLE
    Input: s = "babad"
    Output: "bab"
    Explanation: "aba" is also a valid answer.
 */

function expand(s: string, low: number, high: number): string {
  const length = s.length;

  // Expand in both directions
  while (low >= 0 && high < length && s[low] === s[high]) {
    low--;
    high++;
  }

  // Return palindromic substring
  return s.slice(low + 1, high);
}

function longestPalindrome(s: string): string {
  // Base case
  if (!s) {
    return '';
  }

  let maxStr = ''; // Stores the maximum length palindromic substring found so far
  let maxLength = 0; // Stores the maximum length of palindromic substring found so far

  // Consider every character of the given string as a midpoint and expand in both directions
  for (let i = 0; i < s.length; i++) {
    // Find the longest odd length palindrome with `s[i]` as a midpoint
    let currStr = expand(s, i, i);
    let currLength = currStr.length;

    // Update maximum length palindromic substring if the odd length palindrome has a greater length
    if (currLength > maxLength) {
      maxLength = currLength;
      maxStr = currStr;
    }

    // Find the longest even length palindrome with `s[i]` and `s[i+1]` as midpoints
    // Note that an even length palindrome has two midpoints
    currStr = expand(s, i, i + 1);
    currLength = currStr.length;

    // Update maximum length palindromic substring if even length palindrome has a greater length
    if (currLength > maxLength) {
      maxLength = currLength;
      maxStr = currStr;
    }
  }

  return maxStr;
}

console.log(longestPalindrome('babad'))