#! /usr/bin/env node

// Import the "inquirer" module and chalk library

import inquirer from "inquirer";
import chalk from "chalk";

// Declare a constant "answers" and assign it to the result of inquirer.prompt function.

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message: "Enter your sentence to count the words: ",
  },
]);

// Store the sentence in the sentenceArray

const sentenceArray: string[] = answers.Sentence.trim().split(" ");

// Print the array of words to console

console.log(chalk.cyan("Your sentence words:"));
console.log(chalk.gray(sentenceArray));

// Print the word count of the sentence to the console

console.log(
  chalk.green(`Your sentence word count is: ${sentenceArray.length}`)
);
