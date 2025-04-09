
function Percentage(Marks : number,outof: number=100):number
{
    var Result : number=0;
    Result=((Marks/outof)*100);
    return Result;
}

var Ans : number=0;

Ans = Percentage(89,200);
console.log("Percentage is :"+Ans);

Ans = Percentage(89);
console.log("Percentage is :"+Ans);