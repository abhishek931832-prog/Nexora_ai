function generate() {

    // Student Details
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();

    // Subject Marks
    const h = Number(document.getElementById("h").value);
    const e = Number(document.getElementById("e").value);
    const m = Number(document.getElementById("m").value);
    const s = Number(document.getElementById("s").value);
    const sst = Number(document.getElementById("sst").value);

    // Validation
    if (
        name === "" ||
        roll === "" ||
        isNaN(h) || isNaN(e) || isNaN(m) ||
        isNaN(s) || isNaN(sst)
    ) {
        alert("Please fill all the fields.");
        return;
    }

    if (
        h > 100 || e > 100 || m > 100 ||
        s > 100 || sst > 100 ||
        h < 0 || e < 0 || m < 0 ||
        s < 0 || sst < 0
    ) {
        alert("Marks should be between 0 and 100.");
        return;
    }

    // Total & Percentage
    const total = h + e + m + s + sst;
    const percentage = (total / 5).toFixed(2);

    // Grade
    let grade = "";
    let result = "PASS";

    if (h < 33 || e < 33 || m < 33 || s < 33 || sst < 33) {
        grade = "F";
        result = "FAIL";
    }
    else if (percentage >= 90) {
        grade = "A+";
    }
    else if (percentage >= 80) {
        grade = "A";
    }
    else if (percentage >= 70) {
        grade = "B+";
    }
    else if (percentage >= 60) {
        grade = "B";
    }
    else if (percentage >= 50) {
        grade = "C";
    }
    else if (percentage >= 33) {
        grade = "D";
    }
    else {
        grade = "F";
        result = "FAIL";
    }

    // Display Result
    document.getElementById("showName").textContent = name;
    document.getElementById("showRoll").textContent = roll;
    document.getElementById("showTotal").textContent = `${total} / 500`;
    document.getElementById("showPercentage").textContent = `${percentage}%`;
    document.getElementById("showGrade").textContent = grade;
    document.getElementById("showResult").textContent = result;

}

