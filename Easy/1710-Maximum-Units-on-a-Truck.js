/**
You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes,
 where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck.
You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
 */

// var findMaxBox = function (boxTypes) {
//     let max = 0;
//     let maxIndex = null;
//     for (let i = 0; i < boxTypes.length; i++){
//         if (max < boxTypes[i][1]) {
//             maxIndex = i;
//             max = boxTypes[i][1];
//         }
//     }
//     return maxIndex;
// }

// var maximumUnits = function(boxTypes, truckSize) {
//
//     var findMaxBox = function (boxTypes) {
//         let max = 0;
//         let maxIndex = null;
//         for (let i = 0; i < boxTypes.length; i++){
//             if (max < boxTypes[i][1]) {
//                 maxIndex = i;
//                 max = boxTypes[i][1];
//             }
//         }
//         return maxIndex;
//     }
//
//     if (truckSize == 0 || boxTypes.length == 0) {
//         return 0;
//     }
//     else {
//         let maxBox = findMaxBox(boxTypes);
//         if (boxTypes[maxBox][0] >= truckSize){
//             return truckSize * boxTypes[maxBox][1];
//         }
//         else {
//             let numofBoxes = boxTypes[maxBox][0];
//             let output = boxTypes[maxBox][0] * boxTypes[maxBox][1];
//             boxTypes.splice(maxBox, 1);
//             return output + maximumUnits(boxTypes, truckSize - numofBoxes);
//         }
//     }
// };


var maximumUnits = function (boxTypes, truckSize) {
    let output = 0;
    if (truckSize == 0 || boxTypes.length == 0) {
        return 0;
    }
    else {
        boxTypes.sort((a, b) => b[1] - a[1]);
        let j = 0;
        for (let i = truckSize; i > 0 && j < boxTypes.length; i--){
            if (boxTypes[j][0] > 0) {
                output += boxTypes[j][1];
                boxTypes[j][0] = boxTypes[j][0] - 1;
            }
            else {
                i++;
                j++;
            }
        }
        return output;
    }
}
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10));
console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35));
// console.log(findMaxBox([[5,10],[2,5],[4,7],[3,9]]));