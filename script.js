/* ================= LOGIN ================= */

function login() {
    const role = document.getElementById("role").value;

    if (role === "patient") {
        window.location.href = "patient.html";
    } else {
        window.location.href = "doctor.html";
    }
}

function logout() {
    window.location.href = "login.html";
}

/* ================= SIDEBAR SECTION SWITCH ================= */

function showSection(sectionId, element) {

    // Hide all sections
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    // Show selected section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add("active");
    }

    // Remove active from sidebar items
    document.querySelectorAll(".sidebar ul li").forEach(li => {
        li.classList.remove("active");
    });

    // Add active to clicked item
    if (element) {
        element.classList.add("active");
    }
}

/* ================= PATIENT ACTIONS ================= */

function bookAppointment() {
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;

    if (!date) {
        alert("Please select a date.");
        return;
    }

    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push({ doctor, date });

    localStorage.setItem("appointments", JSON.stringify(appointments));

    alert("Appointment booked successfully.");
}

function submitQuery() {
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;

    if (!subject || !description) {
        alert("Please fill all fields.");
        return;
    }

    const queries = JSON.parse(localStorage.getItem("queries")) || [];
    queries.push({ subject, description });

    localStorage.setItem("queries", JSON.stringify(queries));

    alert("Query submitted successfully.");
}

/* ================= DOCTOR PAGE DATA LOAD ================= */

document.addEventListener("DOMContentLoaded", function () {

    // Load appointments in doctor page
    const appointmentTable = document.getElementById("appointmentTable");

    if (appointmentTable) {
        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

        appointmentTable.innerHTML = "";

        appointments.forEach(app => {
            const row = `
                <tr>
                    <td>${app.doctor}</td>
                    <td>${app.date}</td>
                </tr>
            `;
            appointmentTable.innerHTML += row;
        });
    }

    // Load queries in doctor page
    const queryTable = document.getElementById("queryTable");

    if (queryTable) {
        const queries = JSON.parse(localStorage.getItem("queries")) || [];

        queryTable.innerHTML = "";

        queries.forEach(q => {
            const row = `
                <tr>
                    <td>${q.subject}</td>
                    <td>${q.description}</td>
                </tr>
            `;
            queryTable.innerHTML += row;
        });
    }

});