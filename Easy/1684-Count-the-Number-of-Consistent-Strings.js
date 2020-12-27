/**
 You are given a string 'allowed' consisting of distinct characters and an array of strings words.
 A string is consistent if all characters in the string appear in the string allowed.

 Return the number of consistent strings in the array words.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    words.forEach(word => {
        let i = 0;
        for (i = 0; i < word.length; i++){
            if (!allowed.includes(word[i])) {
                break;
            }
        }
        if (i == word.length){
            count++;
        }

    })
    return count;
};

console.log(countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]));