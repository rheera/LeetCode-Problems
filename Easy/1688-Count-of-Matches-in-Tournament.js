/**
 You are given an integer n, the number of teams in a tournament that has strange rules:

 If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played,
 and n / 2 teams advance to the next round.
 If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired.
 A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
 Return the number of matches played in the tournament until a winner is decided.

 */

/**
 * @param {number} n
 * @return {number}
 */


//recursive solution
var numberOfMatchesRecursive = function(n) {
    if (n == 1){
        return 0;
    }
    else if (n == 2) {
        return 1;
    }
    else if (n % 2 == 0){
        return numberOfMatchesRecursive(n/2) + n/2;
    }
    else {
        return numberOfMatchesRecursive((n-1)/2 + 1) + (n-1)/2;
    }
};

var numberOfMatchesSwitch = function(n) {
    switch (n) {
        case 1:
            return 0;
        case 2:
            return 1;
        case n % 2 == 0:
            return numberOfMatchesSwitch(n/2) + n/2;
        default:
            return numberOfMatchesSwitch((n-1)/2 + 1) + (n-1)/2;
    }
};

var numberOfMatchesTernary = function(n) {
    return n == 1 ? 0 :
        n == 2 ? 1 :
            n % 2 == 0 ? numberOfMatchesTernary(n/2) + n/2 :
                numberOfMatchesTernary((n-1)/2 + 1) + (n-1)/2;

};

// formula for finding number of matches is just n - 1....
var numberOfMatches = function(n) {
    return n-1;
    };


console.log(numberOfMatches(7));