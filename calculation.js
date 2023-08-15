/* type CalculationInputs2 = [number, number, string]
export async function calculation ([a, b, c]: CalculationInputs2) {
    let result:number;
    if (c === "+"){
        result = (a+b);
        return result;
    } else if (c === "-"){
        result = (a-b);
        return result;
    } else if (c === "*"){
        result = (a*b);
        return result;
    } else if (c === "/"){
        result = (a/b);
        return result;
    }
    
}
 */
//SIMPLE METHOD
export async function calculation(a, b, c) {
    let result;
    if (c === "+") {
        result = (a + b);
        return result;
    }
    else if (c === "-") {
        result = (a - b);
        return result;
    }
    else if (c === "*") {
        result = (a * b);
        return result;
    }
    else if (c === "/") {
        result = (a / b);
        return result;
    }
}
