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



}
