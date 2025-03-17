var typeData = new Typed(".role", {
    strings: [
    "Full Stack Developer",
    "Web Developer",
    "UI-UX Designer",
    "Backend Developer",
    "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    });

    function updateDateTime() {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString(); 
        document.getElementById("dateTime").innerText = `${date} ${time}`;
    }

    updateDateTime(); 
    setInterval(updateDateTime, 1000);

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let subjectError = document.getElementById("subjectError");
    let messageError = document.getElementById("messageError");


    nameError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
    messageError.innerText = "";

    let isValid = true;

   
    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

  
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerText = "Enter a valid email (e.g., example@mail.com)";
        isValid = false;
    }

  
    if (subject === "") {
        subjectError.innerText = "Subject is required";
        isValid = false;
    }

    if (message === "") {
        messageError.innerText = "Message cannot be empty";
        isValid = false;
    } else if (message.length < 10) {
        messageError.innerText = "Message should be at least 10 characters";
        isValid = false;
    }


    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
    }
});
  function navigateTo(url) {
    window.location.href = url; 
  }