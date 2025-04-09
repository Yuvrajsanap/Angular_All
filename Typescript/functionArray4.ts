
function Demo():string[]
{
   var Languages : string[]=["c","java","python"];
}

var Arr : string[];
Arr=Demo();


console.log("Element of array are :");
var i: number=0;

for(i=0;i<Arr.length;i++){
    console.log(Arr[i]);
}