function showTime() {
    const now = new Date();
    
    const datePart = now.toDateString();
    const timePart = now.toLocaleTimeString([], { hour12: false });
    const timeZonePart = now.toString().split(' ')[5]; // Get the time zone part

    const time = `${datePart} ${timePart} ${timeZonePart}`;
    
    document.getElementById("time").textContent = time;
}

// Call the function
showTime();


function showDate() {
    const now = new Date();

    const time = now.getDate() + "/" + now.toLocaleString("en-US", { month: "long" }) + "/" + now.getFullYear();

    document.getElementById("date").textContent = time;
}
