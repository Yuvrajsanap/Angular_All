function Percentage(Marks, outof) {
    var Result = 0;
    Result = ((Marks / outof) * 100);
    return Result;
}
var Ans = 0;
Ans = Percentage(77, 100);
console.log("Percentage is :" + Ans);
