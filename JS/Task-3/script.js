function multiply(){
    let inputElement = document.getElementById("num1");
    let number = parseInt(inputElement.value);
    let inputElement1 = document.getElementById("num2");
    let number1 = parseInt(inputElement1.value);

    if (!isNaN(number)) {
        let reversedNumber = parseInt(number*number1);
        document.getElementById("output").textContent = reversedNumber;
    } else {
        alert("Please enter a valid number.");
    }
}

function divide(){
    let inputElement = document.getElementById("num1");
    let number = parseInt(inputElement.value);
    let inputElement1 = document.getElementById("num2");
    let number1 = parseInt(inputElement1.value);

    if (!isNaN(number)) {
        let reversedNumber = parseInt(number/number1);
        document.getElementById("output").textContent = reversedNumber;
    } else {
        alert("Please enter a valid number.");
    }
}