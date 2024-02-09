//CHAPTER 1
//Write a program that displays your name and age:
//(decided on creating variables as opposed to the simpler 'console log' option in chapter 1 since I know how to do this)
const myName = Jamie
const age = 32
console.log(myName + " " + age)


//CHAPTER 1
//Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3
//(decided on creating variables as opposed to the simpler 'console log' option in chapter 1 since I know how to do this)
const num1 = 6
const num2 = 3
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)

//CHAPTER 2
//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence:
const yourName = prompt("Enter your first name:");
alert(`Hello there, ${yourName}`);

//CHAPTER 2
//Observe the following program and try to predict the final values of its variables:
let a = 2; //2
a -= 1; //1
a++; //a contains 2
let b = 8; //8
b += 2; //b contains 10
const c = a + b * b; //c contains 102
const d = a * b + b; //d contains 30
const e = a * (b + b); //e contains 40
const f = a * b / a; //f contains 10
const g = b / a * a; //g contains 10
console.log(a, b, c, d, e, f, g); //2, 10, 102, 30, 40, 10, 10

//CHAPTER 3
//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
let userInputDayOfWeek = " "; //I attempted to use const but it did not work & ran an error code
if (userInputDayOfWeek = "Monday"){
    console.log("Today is Monday, tomorrow is Tuesday!");
    }else if (userInputDayOfWeek = "Tuesday"){
            console.log("Today is Tuesday, tomorrow is Wednesday!");
    }else if (userInputDayOfWeek = "Wednesday"){
            console.log("Today is Wednesday, tomorrow is Thursday!");
    }else if (userInputDayOfWeek = "Thursday"){
            console.log("Today is Thursday, tomorrow is Friday!");
    }else if (userInputDayOfWeek = "Friday"){
            console.log("Today is Friday, tomorrow is Saturday!");
    }else if (userInputDayOfWeek = "Saturday"){
            console.log("Today is Saturday, tomorrow is Sunday!");
    }else if (userInputDayOfWeek = "Sunday"){
            console.log("Today is Sunday, tomorrow is Monday!");
        }else{
            console.log("Sorry, that is not a day of the week!");
};

//same problem as above, different solution using a switch & creating a different var to not interrupt above

const dayOfWeek = " "
//user inputs day of week above inbetween the quotations
switch (dayOfWeek) {
    case "Monday":
        console.log("Today is Monday, tomorrow is Tuesday!");
        break;
    case "Tuesday":
        console.log("Today is Tuesday, tomorrow is Wednesday!");
        break;
    case "Wednesday":
        console.log("Today is Wednesday, tomorrow is Thursday!");
        break;
    case "Thursday":
        console.log("Today is Thursday, tomorrow is Friday!");
        break;
    case "Friday":
        console.log("Today is Friday, tomorrow is Saturday!");
        break;
    case "Saturday":
        console.log("Today is Saturday, tomorrow is Sunday!")
        break;
    case "Sunday":
        console.log("Today is Sunday, tomorrow is Monday!");
        break;
    default: 
        console.log("Not a day of the week!");

}

//CHAPTER 3
//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
const number1 = Number(" ")
const number2 = Number(" ")
//using the Number() method converts the input value to a number from a string, since I am using quotations aka string.
if (number1 === number2){
    console.log("These two inputs have the same value & type");
    }else{
    console.log("These two inputs do not have the same value & type");
}
    if (number1 >= number2){
        console.log(`${number1} is greater than ${number2}`);
            }else{
                console.log(`${number1} is not greater than ${number2}`);
    }
//getting fancy up in here & practing my template literals, ca chinggg baby.
    if (number1 <= number2){
        console.log(`${number1} is less than ${number2}`);
            }else{
                console.log(`${number1} is not less than ${number2}`); 
    }
//is there more I could practice with? Might come back to this! :) 




