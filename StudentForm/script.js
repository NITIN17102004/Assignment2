const form = document.getElementById("studentForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();

    
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const ageError = document.getElementById("ageError");

    
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";

    let isValid = true;

    
    if(name === ""){
        nameError.textContent = "Name is required";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        emailError.textContent = "Email is required";
        isValid = false;
    }
    else if(!emailPattern.test(email)){
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    
    if(age === ""){
        ageError.textContent = "Age is required";
        isValid = false;
    }
    else if(Number(age) < 18){
        ageError.textContent = "Age must be 18 or above";
        isValid = false;
    }

 
    if(isValid){
        alert("Registration Successful!");
        form.reset();
    }

});