//CHAPTER 4
//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//When it's done, improve it so that the number of turns is given by the user.

//Version 1: While Loop
let numberV1 = 0;
while (numberV1 ++ <=9) {
  console.log(`${numberV1} number of carousel turns`);
}

//Version 1: For Loop
let forLoop = 1;
for (forLoop = 1; forLoop <= 10; forLoop++) {
  console.log(forLoop);
}

//Version 2: For Loop
//come back to this, the condition portion isn't working the way I want it to so I put a '100' in its place

let numberV2 = prompt("How many turns should the carousel go for?:")
for (numberV2 = 1; numberV2 <= 100; numberV2++){
    console.log(`${numberV2} number of carousel turns`);
}


//CHAPTER 4
//Check the following program that shows even numbers (divisible by 2) between 1 and 10.
//This program uses the modulo operator %, which calculates the remainder after division of one number by another.
//It's often used to assess number parity.
//Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
  }

//Improved to show odd numbers as well
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }else{
        console.log(`${i} is odd`);
    }
}

//Improved to replace initial number with a number given by user
//would like it to only read out the given number, so still working on that!

let userInput = prompt("Give me a number, 1-10!")

for (userInput = 1; userInput <= 10; userInput++) {
    if (userInput % 2 === 0) {
      console.log(`${userInput} is even`);
    }else{
        console.log(`${userInput} is odd`);
    }
}

//CHAPTER 4
//Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
//When you are done with the above, improve the program so that the terminating number is between 50 and 100.

let userEntry = prompt("Guess a number, any number!")

while (userEntry > 0 || userEntry > 100) {
        console.log(`${userEntry} is a number is between 1-100!`);
    if (userEntry > 100 || userEntry >= 101)
        break;
    }

//Another way:

    let num = 0;
    while (num < 50 || num > 100) {
        num = Number(prompt("Enter a number between 50 and 100:"));
    }


//Version 2
//Coming back to this
let userEntryV2 = prompt("Guess a number, any number!");

while (userEntryV2 < 50 || userEntryV2 > 100) {
        console.log(`${userEntryV2} is a number is between 50-100!`);
    if (userEntryV2 <= 50 || userEntryV2 > 100)
        break;
    }

//CHAPTER 4
//Write a program that asks the user for a number, then shows the multiplication table for this number.
//When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

let multiplicationTable = 0;
let userNumber = prompt("Give me a number between 1-10!");

while (multiplicationTable <= 10) {
    console.log(`${multiplicationTable} x ${userNumber} = ${multiplicationTable * userNumber}`);
    multiplicationTable ++;
}

//Version 2:
//Will be using the same variables as above
//come back to this! Not working. Ugh!
//It was at first a never ending loop, tried to fix it and broke the whole thing somehow. Haha

multiplicationTable = 0;
userNumber = prompt("Give me a number between 2-9");

while (multiplicationTable > 9 || multiplicationTable > 2 ) {
    console.log(`${multiplicationTable} x ${userNumber} = ${multiplicationTable * userNumber}`);
    multiplicationTable++;
}

//CHAPTER 4
/*Write a program that plays "neither yes, nor no" with the user. 
Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.*/

let input = "";

while (input !== "yes" && input !== "no") {
  input = prompt('Do you want to play a game with me? Neither yes, nor no.');
}
console.log("Game over!");

//CHAPTER 4
//Write a program that shows all numbers between 1 and 100 with the following exceptions:
//It shows "Fizz" instead if the number is divisible by 3.
//It shows "Buzz" instead if the number is divisible by 5 and not by 3.
//When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) console.log("FizzBuzz");
    else if (number % 3 === 0) console.log("Fizz");
    else if (number % 5 === 0) console.log("Buzz");
    else console.log(number);
}

