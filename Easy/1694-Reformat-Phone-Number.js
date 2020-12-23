/**
You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.

You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes.
 Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits.
 The final digits are then grouped as follows:

2 digits: A single block of length 2.
3 digits: A single block of length 3.
4 digits: Two blocks of length 2 each.
The blocks are then joined by dashes.
Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.

Return the phone number after formatting.


 */

/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {

    // recursive function to add dashes, needs a string without dashes as input
    var recursiveReformatNumber = function(number) {

        if (number.length <= 3){
            return number;
        }
        // if length of the string is 4, splt it in two, separated by a dash
        if (number.length == 4){
            return number.substring(0,2) + "-" + number.substring(2,4);
        }
        // take the first three digits add a dash then start the function over with the rest
        else {
            return number.substring(0,3) + "-" + recursiveReformatNumber(number.substring(3, number.length));
        }
    };

    // remove all non-numbers (dashes, and spaces)
    return recursiveReformatNumber(number.replace(/\D/g, ""));

}


console.log(reformatNumber("1-23-45 6"));
