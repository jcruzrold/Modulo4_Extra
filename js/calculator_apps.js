let fSum = (nNumberA, nNumberB) => nNumberA + nNumberB;
let fSubtract = (nNumberA, nNumberB) => nNumberA - nNumberB;
let fMultiply = (nNumberA, nNumberB) => nNumberA * nNumberB;
let fDivide = (nNumberA, nNumberB) => nNumberA / nNumberB;
let nNumberA = 0;


let fCalculatorButtonClick = (event) => {
    let nNumberB = parseFloat(document.getElementById("screenInput").value);

    switch(event.srcElement.id) {
        case "sum-button": 
            if(!isNaN(nNumberB)) nNumberA = fSum(nNumberA,nNumberB);
            break;
            
        case "subtract-button":
            if(!isNaN(nNumberB)) nNumberA = fSubtract(nNumberA,nNumberB);
            break;

        case "multiply-button":
            if(!isNaN(nNumberB)) nNumberA = fMultiply(nNumberA,nNumberB);
            break;

        case "divide-button":
            if(!isNaN(nNumberB) && nNumberB !== 0) nNumberA = fDivide(nNumberA,nNumberB);
            break;
            
        case "equal-button":
            document.getElementById("screenInput").value = nNumberA;
            break;

        case "reset-screen-button":
            document.getElementById("screenInput").value = "";
            break

        case "reset-screen-button":
        default:
            document.getElementById("screenInput").value = "";
            nNumberA = 0;
            break;
    }
};

document.getElementById("sum-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("subtract-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("multiply-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("divide-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("equal-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("reset-screen-button").addEventListener("click",fCalculatorButtonClick);
document.getElementById("reset-acumulator-button").addEventListener("click",fCalculatorButtonClick);