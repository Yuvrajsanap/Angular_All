

//function defination.
function Display(Arr: number[]):void{
    console.log("Element of the array is:");

    var i:number=0;
    for(i=0;i<Arr.length;i++){
        console.log(Arr[i]);
    }
}

var Marks : number[]=[67,89,77,90,88];

//function call
Display(Marks);