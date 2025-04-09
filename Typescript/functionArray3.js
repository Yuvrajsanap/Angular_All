function Demo() {
    var Marks = [10, 20, 30, 40];
    return Marks;
}
var Arr;
Arr = Demo();
console.log("Element of array are :");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
