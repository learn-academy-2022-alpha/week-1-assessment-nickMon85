// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const longerString =(str1,str2)=>{
    if(str1.length > str2.length){
        return str1
    }else{
        return str2
    }
}
console.log(longerString(fruit1,fruit2));
console.log(longerString(fruit3,fruit4));


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

const temp1 = 42
const temp2 = 350
const temp3 = 212
const temp4 = 3434
//looking for 3 options: at boil, above boil, below boil.
//most strigent option should come first, which is at boil. 212!
//use test variables
// Expected output: "42 below boil", "350 above boil", "212 @boil"
const findBoil = (addTemp)=>{
    //start with most strigent option
    if(addTemp === 212){
        return `${addTemp} is at boiling point`
    } else if (addTemp < 212){
    //second smallest option
        return `${addTemp} is below boiling point`  
    }else{
    //This is the catch all because there is an infinite number thats larger
        return `${addTemp} is above boiling point`
    }
}
console.log(findBoil(temp1));
console.log(findBoil(temp2));
console.log(findBoil(temp3));
console.log(findBoil(temp4));




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10
// Combine two arrays using .concat
// Make new Variable to put the values of both arrays
// Use .length on new variable
//count Array .length is an informational command that returns the number of elements in the array.
const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

var comboArrays = myNumbers1.concat(myNumbers2)

console.log(comboArrays.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"
// NOTE: As far as I know there is no reverse method for str.
//1. Use the split() method to return a new array
const currentCohort = "Alpha 2022"
var arrCohort = currentCohort.split("")
//2. Use the reverse() method to reverse the create array
var reverseArray = arrCohort.reverse()
//3. Use joint() method to join all elements of the array into a str.
var joinArray = reverseArray.join("")
console.log(joinArray);
// Ill try a  function with a for loop
const reverseString =(str)=>{
    //because functions are reusable I'll create an empty str
    var currentCohort2 = ""
    //Im not totally clear why '-1' works instead of .length but this is what i got to work
    //As long as i is greater than or equal 0, the loop will go on
    // we decrement i after each iteration
    for(let i = str.length-1;i>=0;i--){
        //str.length =10; i = str.length -1 and 'newString' =newString + str[i]
        //first iteration i =10-1=9   newStr. =""+"2"="2"
        //2nd iteration i =9-1=8;     newStr. ="2"+"2" = "22"
        //3rd iteration i =8-1=7;     newStr. ="22"+"0" ="220"
        //4th iteration i =7-1=6;     newStr. ="220"+"2"="2202" etc.
        currentCohort2 += str[i]
    }
    //return reverse str.
    return currentCohort2;
}
console.log(reverseString("Alpha 2022"));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"
//expected outcome:odd,even,odd,even,odd,even
const myArray = [13, 34, 5, 10, 27, 42]
//1st loop thru array
for(let i=0;i<myArray.length;i++){
    //What do I want it to do while looping?
    //It needs to evaluate odd and even
    if(myArray[i]%2 !==0){//if its not divisible by 2;'odd'
       console.log('odd')
    }else{//catch all 50/50!
        console.log('even');
    }
}


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24
//outcput:42,3
//create function call 
const mathDiff = (a,b)=>{
    //the question wanted to subtract the "smaller" from the "larger"
    //The way its phased I thought the function need to be able to identify the larger and smaller number, 
    //Data for the which identifying size isnt necessary for expected output
    //my process may be wrong, but I just wrote for the difference
    return Math.abs(a-b);
}
console.log(mathDiff(number1,number2));
console.log(mathDiff(number3,number4));

