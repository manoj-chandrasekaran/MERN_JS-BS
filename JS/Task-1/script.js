function reverseNumber() {
    let inputElement = document.getElementById("inputNumber");
    let number = parseInt(inputElement.value);

    if (!isNaN(number)) {
        let reversedNumber = parseInt(number.toString().split("").reverse().join(""));
        document.getElementById("output").textContent = reversedNumber;
    } else {
        alert("Please enter a valid number.");
    }
}
