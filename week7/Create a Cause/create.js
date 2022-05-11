document.body.style.textAlign = "center";

var form = document.getElementById("formInfo");
var submitIt = document.getElementById("submit");

function newAlert() {

    var movementName = form.elements["movementName"].value;
    var email = form.elements["email"].value;
    var members = form.elements["members"].value;

    alert ("Movement Name: " + movementName + "\nEmail: " + email + "\nMembers: " + members);

    form.reset();
};

submitIt.addEventListener("click", newAlert);