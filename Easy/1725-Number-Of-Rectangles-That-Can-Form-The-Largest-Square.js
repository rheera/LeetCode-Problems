/**
 You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

 You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi.
 For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

 Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

 Return the number of rectangles that can make a square with a side length of maxLen.
 */

var countGoodRectangles = function(rectangles) {
    let total = 0;
    let maxLen = 0;

    for (let i = 0; i < rectangles.length; i++){
        if (Math.min(...rectangles[i]) > maxLen) {
            maxLen = Math.min(...rectangles[i]);
            total = 1;
        }
        else if (Math.min(...rectangles[i]) == maxLen) {
            total++;
        }
    }
    return total;
};

console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]));