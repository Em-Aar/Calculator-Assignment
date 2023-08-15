/* import { firstInputs } from "./operations.js"; "./operations.js";
import { calculation } from "./calculation.js";

const myInputs  = await firstInputs();
const result = await calculation (myInputs);
console.log(result);

 */
//Simple Method
import { firstNumber, secondNumber, operation } from "./operations.js";
import { calculation } from "./calculation.js";
let finalResult = await calculation(firstNumber, secondNumber, operation);
console.log(`Calculation result is ${finalResult}`);
