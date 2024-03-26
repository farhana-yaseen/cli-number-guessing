
import inquirer from "inquirer";
import chalk from "chalk";

let maxNumber = 10;


const randomNumber = (Math.floor(Math.random() * (maxNumber) + 1));

console.log(chalk.bgBlue.bold.italic("       Wellcome to CLI based Number Guessing Game  "));
console.log(chalk.bgGreen.bold.italic("              Choose Number between 1-10           "));

const answer = await inquirer.prompt([{

    name: "userGuessingNumber",
    type: "number",
    message: chalk.red("Please Guess a Number")
    
}])


if (answer.userGuessingNumber === randomNumber){
    console.log(chalk.bgBlue.bold("  congratulations you Guessed a Right Number  "));
}else{
    console.log(chalk.bgGreenBright.bold("  Sorry you Guess a wrong number  "));
  
}


