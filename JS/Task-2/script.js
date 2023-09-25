
function order() {
    let inputElement = document.getElementById("inputString");
    let string = inputElement.value.trim(); // Trim any leading or trailing spaces

    // Use a regular expression to check if the input contains only letters
    if (/^[a-zA-Z]+$/.test(string)) {
        let alpha = string.split("").sort().join("");
        document.getElementById("output").textContent = alpha;
    } else {
        alert("Please enter a valid string containing only letters.");
    }
}

