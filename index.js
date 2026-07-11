var ADMIN_USERNAME = "admin";
var ADMIN_PASSWORD = "admin123";

var doctors = [];
var patients = [];
var appointments = [];


var app = true;

while (app) {

    var choice = prompt(
        "===== HOSPITAL MANAGEMENT SYSTEM =====\n\n" +
        "1. Admin Login\n" +
        "2. Doctor\n" +
        "3. Patient\n" +
        "4. Exit"
    );

    if (choice == 1) {

        var  username = prompt("Enter Admin Username");
        var password = prompt("Enter Admin Password");

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            alert("Admin Login Successful");
            adminPanel();
        } else {
            alert("Invalid Admin Credentials");
        }

    } else if (choice == 2) {
        doctorMenu();

    } else if (choice == 3) {
        patientMenu();

    } else if (choice == 4) {
        app = false;
        alert("Thank You");

    } else {
        alert("Invalid Option");
    }
    
function doctorMenu() {

    var menu = true;

    while (menu) {

        var option = prompt(
            "===== DOCTOR =====\n\n" +
            "1. Sign Up\n" +
            "2. Login\n" +
            "3. Back"
        );

        if (option == 1) {

            var name = prompt("Enter Doctor Name");
            var password = prompt("Create Password");

            doctors.push({
                name: name,
                password: password,
                available: true
            });

            alert("Doctor Registered Successfully");

        } else if (option == 2) {

            // ---- Doctor Login ----
            var name = prompt("Enter Doctor Name");
            var password = prompt("Enter Password");

            var found = false;

            for (var i = 0; i < doctors.length; i++) {
                if (doctors[i].name === name && doctors[i].password === password) {
                    found = true;
                    alert("Welcome Dr. " + doctors[i].name);
                    doctorPanel(doctors[i]);
                    break;
                }
            }

            if (!found) {
                alert("Invalid Login");
            }

        } else if (option == 3) {
            menu = false;

        } else {
            alert("Invalid Choice");
        }

    }

}
    
function patientMenu() {

    var menu = true;

    while (menu) {

        var option = prompt(
            "===== PATIENT =====\n\n" +
            "1. Sign Up\n" +
            "2. Login\n" +
            "3. Back"
        );

        if (option == 1) {

            var username = prompt("Create Username");
            var password = prompt("Create Password");

            patients.push({
                username: username,
                password: password
            });

            alert("Patient Registered Successfully");

        } else if (option == 2) {

            var username = prompt("Username");
            var password = prompt("Password");

            var found = false;

            for (var i = 0; i < patients.length; i++) {
                if (patients[i].username === username && patients[i].password === password) {
                    found = true;
                    alert("Welcome " + patients[i].username);
                    patientPanel(patients[i]);
                    break;
                }
            }

            if (!found) {
                alert("Invalid Login");
            }

        } else if (option == 3) {
            menu = false;

        } else {
            alert("Invalid Choice");
        }

    }

}

function adminPanel() {

    var admin = true;

    while (admin) {

        var option = prompt(
            "===== ADMIN PANEL =====\n\n" +
            "1. View All Doctors\n" +
            "2. View All Patients\n" +
            "3. View Available Doctors\n" +
            "4. View All Appointments\n" +
            "5. Logout"
        );

        if (option == 1) {

            console.clear();
            console.log("========== DOCTORS ==========");

            if (doctors.length == 0) {
                console.log("No Doctors Registered");
            } else {
                for (let i = 0; i < doctors.length; i++) {
                    console.log("Doctor ID : " + (i + 1));
                    console.log("Name : " + doctors[i].name);
                    console.log("Available : " + (doctors[i].available ? "Yes" : "No"));
                    console.log("----------------------------");
                }
            }

            alert("Doctors Printed In Console");

        } else if (option == 2) {

            // ---- View All Patients ----
            console.clear();
            console.log("========== PATIENTS ==========");

            if (patients.length == 0) {
                console.log("No Patients Registered");
            } else {
                for (let i = 0; i < patients.length; i++) {
                    console.log("Patient ID : " + (i + 1));
                    console.log("Username : " + patients[i].username);
                    console.log("----------------------------");
                }
            }

            alert("Patients Printed In Console");

        } else if (option == 3) {

            console.clear();
            console.log("====== AVAILABLE DOCTORS ======");

            var found = false;

            for (var i = 0; i < doctors.length; i++) {
                if (doctors[i].available) {
                    found = true;
                    console.log("Doctor ID : " + (i + 1));
                    console.log("Name : " + doctors[i].name);
                    console.log("----------------------------");
                }
            }

            if (!found) {
                console.log("No Available Doctors");
            }

            alert("Available Doctors Printed In Console");

        } else if (option == 4) {

            // ---- View All Appointments ----
            console.clear();
            console.log("======= APPOINTMENTS =======");

            if (appointments.length == 0) {
                console.log("No Appointments Found");
            } else {
                for (let i = 0; i < appointments.length; i++) {
                    console.log("Appointment " + (i + 1));
                    console.log("Patient : " + appointments[i].patient);
                    console.log("Doctor : " + appointments[i].doctor);
                    console.log("Disease : " + appointments[i].disease);
                    console.log("----------------------------");
                }
            }

            alert("Appointments Printed In Console");

        } else if (option == 5) {
            admin = false;
            alert("Admin Logout Successful");

        } else {
            alert("Invalid Choice");
        }

    }

}




}
