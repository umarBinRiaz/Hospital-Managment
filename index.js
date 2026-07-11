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

}
