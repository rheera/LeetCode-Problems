/**
 You are given a string s of even length.
 Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

 Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').
 Notice that s contains uppercase and lowercase letters.

 Return true if a and b are alike. Otherwise, return false.
*/

// var halvesAreAlike = function(s) {
//     let count = 0;
//     for (let i = 0; i < s.length/2; i++){
//         switch (s[i].toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 count ++;
//                 break;
//             default:
//                 break;
//         }
//         switch (s[s.length - 1 - i].toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 count --;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return count == 0;
//
// };

/*
var halvesAreAlike = function(s) {
    //let sLowercase = s.toLowerCase();
    let count = 0;
    console.log(s.substring(0, s.length/2).match(/[AEIOUaeiou]/g).length);
    count = s.substring(0, s.length/2).match(/[AEIOUaeiou]/g).length;
    count -= s.substring(s.length/2, s.length).match(/[AEIOUaeiou]/g).length;
    //return s.toLowerCase().match(/[aeiou]/g);
    // let regex = /[aeiou]/g;
    // while ((match = regex.exec(s)) != null) {
    //     console.log("match found at " + match.index);
    // }
    //return /[aeiou]/g.exec(s.toLowerCase()).index;
    return count == 0;

};
*/

var halvesAreAlike = function(s) {
    //return s.matchAll(/[AEIOUaeiou]/g);
    console.log(s.substring(0, s.length/2).match(/[AEIOUaeiou]/g));
    let firstHalf = s.substring(0, s.length/2).match(/[AEIOUaeiou]/g);
    let secondHalf = s.substring(s.length/2, s.length).match(/[AEIOUaeiou]/g);

    if (firstHalf == null) {
        if (secondHalf == null) {
            return true;
        }
        else {
            return false;
        }
    }

    else if (secondHalf == null) {
        return false;
    }

    else if (firstHalf.length == secondHalf.length) {
        return true;
    }

    else {
        return false;
    }

};

console.log(halvesAreAlike("book"));
//console.log("abc".match(/[d]/g).length);