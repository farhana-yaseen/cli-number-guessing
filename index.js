#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let maxNumber = 6;
let condition = true;
while (condition) {
    const randomNumber = (Math.floor(Math.random() * (maxNumber) + 1));
    console.log(chalk.bgBlue.bold.italic("Wellcome to CLI based Number Guessing Game..."));
    console.log(chalk.bgGreen.bold.italic("Choose Number between 1-6  "));
    const answer = await inquirer.prompt({
        name: "userGuessingNumber",
        type: "number",
        message: chalk.red("Please Guess a Number")
    });
    if (answer.userGuessingNumber === randomNumber) {
        console.log(chalk.bgBlue.bold("Congratulations you won ...  \n you Guessed a Right Number.."));
    }
    else {
        console.log(chalk.bgGreenBright.bold("Sorry you lose the Game \n Better luck next time.."));
    }
    const answer2 = await inquirer.prompt({
        name: "userChoice",
        type: "confirm",
        message: chalk.red("Do you want to play again...... "),
        default: "false"
    });
    condition = answer2.userChoice;
}
