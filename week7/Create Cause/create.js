document.body.style.textAlign = "center";

var form = document.getElementById("formInfo");
var submitIt = document.getElementById("submit");

function newAlert() {

    var fullName = form.elements["fullName"].value;
    var email = form.elements["email"].value;
    var age = form.elements["age"].value;

    alert ("Full Name: " + fullName + "\nEmail: " + email + "\nMembers: " + age);

    form.reset();
};

submitIt.addEventListener("click", newAlert);