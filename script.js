var firstNumber = window.prompt("Enter the First Number");
while (isNaN(firstNumber)){
     alert("Error in Input! Ensure that you enter a number");
     firstNumber = window.prompt("Enter the First Number");
}

let operator = window.prompt("Enter your choiced operator\n e.g +,-,*,/ ");

var secondNumber = window.prompt("Enter the Second Number\n");
while (isNaN(secondNumber)){
     alert("Error in Input! Ensure that you enter a number");
     secondNumber = window.prompt("Enter the Second Number\n");
}

firstNumber = parseFloat(firstNumber)
secondNumber = parseFloat(secondNumber)

var result 

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

alert(String(firstNumber) + " " + operator + " " + String(secondNumber) + " " + "=" + " " + String(result) )
