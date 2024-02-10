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

//CHAPTER 3
//Take a look at the following program: 
//Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their initial values. 
//Complete the following table (will be below the following problem)

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

//table to problem above:

nb1 = nb2 = nb3 = 4	//nb1 final value = 0,  nb2 final value = 4,  nb3 final value = 12

nb1 = 4, nb2 = 3, nb3 = 2 //nb1 final value = 4,  nb2 final value = 3,  nb3 final value = 2

nb1 = 2, nb2 = 4, nb3 = 0 //nb1 final value = 3,  nb2 final value = 4,  nb3 final value = 0

//CHAPTER 3
//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const monthNumber = Number(prompt("Enter Month Number 1-12:"));
//first attempted using parentheses in the case, and learned that it will read undefined since its converted to a number not a string!
switch (monthNumber) {
    case 1: //January
        console.log("this month has 31 days!");
        break;
    case 2: //February
        console.log("this month has 28 days!");
        break;
    case 3: //March
        console.log("this month has 31 days!");
        break;
    case 4: //April
        console.log("this month has 30 days!");
        break;
    case 5: //May
        console.log("this month has 31 days!");
        break;
    case 6: //June
        console.log("this month has 30 days!");
        break;
    case 7: //July
        console.log("this month has 31 days!");
        break;
    case 8: //August
        console.log("this month has 30 days!");
        break;
    case 9: //September
        console.log("this month has 31 days!");
        break;
    case 10: //October
        console.log("this month has 30 days!");
        break;
    case 11: //November
        console.log("this month has 31 days!");
        break;
    case 12: //December
        console.log("this month has 30 days!");
        break;
    default: 
        console.log("This is not a number that matches with a month!")
}   

//The switch above feels a little 'long' and more lines of code than it might need.
//Starting with creating a variable so the user can input the month number
//February is the only month that doesn't follow the rules on number of days, so that's gotta be the first thing to check
//Knowing that I can find an even number by using a modulus - and that all even months are 30 days and all odd months are 31

const numberMonth = Number(prompt("Enter Month Number 1-12:"));

if (numberMonth === 2){
    console.log("This month has 28 days!");
    }else if (numberMonth % 2 ===0){
        console.log("This month has 30 days!");
        }else{
            console.log("This month has 31 days!");
}

//CHAPTER 3
//Write a program that asks for a time under the form of three information (hours, minutes, seconds). 
//The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
//COMING BACK TO THIS ----> NOT COMPLETE
/*
14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)
*/
/*
let hour = Number(prompt("what hour is it?"));
let minute = Number(prompt("what minute is it?"));
let second = Number(prompt("what second is it?"));

if (second > 59 || second < 0 || minute > 59 || minute < 0 || hour > 23 || hour < 0) 
{
    console.log("please, enter a valid time");
} else if ((hour === 23) && (minute === 59) && (second === 59)) {
    hour = 0;
    minute = 0;
    second = 0;
    console.log(`${hour}h ${minute}m ${second}s`);

} else if ((second <= 59) && (minute <= 59) && (hour <= 23)) {
    hour++;
    minute =0;
    second =0;
    console.log(`${hour}h ${minute}m ${second}s`);


} else if (second < 59 && hour <= 23 && minute <= 59) {
    second++;
    console.log(`${hour}h ${minute}m ${second}s`);

}

else if (second <= 59) {
    second = 0;
    minute++;
    console.log(`${hour}h ${minute}m ${second}s`);
} 
*/