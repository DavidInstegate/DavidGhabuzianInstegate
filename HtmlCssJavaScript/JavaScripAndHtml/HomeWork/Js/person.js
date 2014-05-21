var person = {
    firstName : "Name",
    surName : "Surname",
    age : 0,
    eyeColor : "Brown",
};
function addPerson() {
    person.firstName = document.getElementById("idFirstName").value;
    person.surName = document.getElementById("idSurName").value;
    person.eyeColor = document.getElementById("idEyeColor").value;
    var list = document.getElementById("idAge");
    var index = list.selectedIndex;
    person.age = list[index].value;
}
function getPerson() {
    document.getElementById("demo").innerHTML = person.firstName + " " + person.surName 
        + " is " + person.age + " years old and has " + " " + person.eyeColor + " eyes.";
    clearFields();
}
function clearFields() {
    document.getElementById("idFirstName").value = "";
    document.getElementById("idSurName").value = "";
    document.getElementById("idEyeColor").value = "";
    document.getElemerntById("idAge").selectedIndex = -1;
}
