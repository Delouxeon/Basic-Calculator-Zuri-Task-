let firstNumber = parsefloat(window.prompt("Enter the First Number"));
while (isNaN(firstNumber)){
     alert("Error in Input! Ensure that you enter a number");
     firstNumber = prompt("Enter the First Number");
}

let operator = parsefloat(window.prompt("Enter your choiced operator\n e.g +,-,*,/ : "));

let secondNumber = window.prompt("Enter the Second Number\n");
while (isNaN(secondNumber)){
     alert("Error in Input! Ensure that you enter a number");
     firstNumber = window.prompt("Enter the First Number");
}

let result = undefined

if (operator =="+"){
    result = firstNumber + secondNumber;
}

else if (operator =="-"){
     result = firstNumber - secondNumber;
}

else if (operator =="*"){
    result = firstNumber * secondNumber;
}

else if (operator =="/"){
    result = firstNumber / secondNumber;
}

alert(firstNumber, operator, secondNumber, "=", result)