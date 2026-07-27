function addUser() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;

    if (name === "" || age === "" || email === "") {
        alert("Please fill all fields.");
        return;
    }

    const tableBody = document.querySelector("#userTable tbody");

    const newRow = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = name;

    const ageCell = document.createElement("td");
    ageCell.textContent = age;

    const emailCell = document.createElement("td");
    emailCell.textContent = email;

    newRow.appendChild(nameCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(emailCell);

    tableBody.appendChild(newRow);

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
}