
let EnglishMarks =60;
let UrduMarks =70;
let AVG = (EnglishMarks+UrduMarks)/2;
console.log("English Marks:\t"+EnglishMarks)
console.log("Urdu Marks:\t"+UrduMarks);
console.log("Average Score:\t"+AVG);
if(AVG>=90)
{
    console.log("Grade: A+");
}
else if(AVG>=80)
{
    console.log("Grade: A");
}
else if(AVG>=70 && AVG <80)
{
    console.log("Grade: B+");
}
else if(AVG>=60 && AVG <70)
{
    console.log("Grade: B");
}
else
{
    console.log("Grade: F");
}