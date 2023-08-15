/*import inquirer from "inquirer";

 type CalculationInputs = [number, number, string]
export async function firstInputs () {
    const userInputs = await inquirer.prompt ([
        {
            name: "num1",
            type: "number",
            message: "Enter first Number",
        },

        {
            name: "num2",
            type: "number",
            message: "Enter second Number",
        },

        {
            name: "operation",
            type: "list",
            message: "Select the operation to perform",
            choices: ["+","-","*","/"]
        }
    ]);
    let Array_New : CalculationInputs = [userInputs.num1, userInputs.num2, userInputs.operation]
    return Array_New
} */
// SIMPLE METHOD
import inquirer from "inquirer";
const firstInput = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter first Number",
    }
]);
const secondInput = await inquirer.prompt([
    {
        name: "num2",
        type: "number",
        message: "Enter first Number",
    }
]);
const thirdInput = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select the operation to perform",
        choices: ["+", "-", "*", "/"]
    }
]);
let firstNumber = firstInput.num1;
let secondNumber = secondInput.num2;
let operation = thirdInput.operation;
export { firstNumber, secondNumber, operation };
