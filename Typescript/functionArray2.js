//function defination.
function Adition(Arr) {
    console.log("Element of the array is:");
    var sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum;
}
var Marks = [67, 89, 77, 90, 88];
var Result = 0;
Result = Adition(Marks);
//function call
Adition(Marks);
