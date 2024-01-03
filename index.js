#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`lets start calculation`);
    await sleep();
    rainbowTitle.stop();
    console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
  `);
    // console.log(`${rainbowTitle}-is-fine`)
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operation",
            message: "which operation do you want to perform",
            choices: ["addition", "subtraction", "multiplication", "division"],
        },
        {
            type: "number",
            name: "num1",
            message: "entre number 1:",
        },
        {
            type: "number",
            name: "num2",
            message: "entre number 2:",
        },
    ])
        .then((answers) => {
        // console.log("answers")
        if (answers.operation == "addition") {
            console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
        }
        else if (answers.operation == "subtraction") {
            console.log(chalk.yellow(`${answers.num1}-${answers.num2} = ${answers.num1 - answers.num2}`));
        }
        else if (answers.operation == "multiplication") {
            console.log(chalk.blueBright(`${answers.num1}*${answers.num2} = ${answers.num1 * answers.num2}`));
        }
        else if (answers.operation == "division") {
            console.log(chalk.red(`${answers.num1}/${answers.num2} = ${answers.num1 / answers.num2}`));
        }
    });
}
// askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you want to continue ? press y or n:",
        });
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES");
}
startAgain();
