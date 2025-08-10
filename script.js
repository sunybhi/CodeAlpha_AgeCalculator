// Show current date
document.getElementById("current-date").textContent = 
    "Today is: " + new Date().toDateString();

function calculateAge() {
    let dob = document.getElementById("dob").value;
    let errorMsg = document.getElementById("error-message");
    let result = document.getElementById("result");
    errorMsg.textContent = "";
    result.textContent = "";

    if (dob === "") {
        errorMsg.textContent = "⚠ Please select your date of birth.";
        return;
    }

    let dobDate = new Date(dob);
    let today = new Date();

    if (dobDate > today) {
        errorMsg.textContent = "⚠ Date of birth cannot be in the future!";
        return;
    }

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
}

function resetForm() {
    document.getElementById("dob").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("error-message").textContent = "";
}
