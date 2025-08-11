$(document).ready(() => {
    $("h2").css({"text-transform" : "uppercase", "font-weight": "bold"});
    
    $("#registrationForm").submit((e) => {
        e.preventDefault();
        let valid = true;

        
        $(".error").text("");

        
        const name = $("#name").val().trim();
        if (name === "") {
            $("#nameError").text("Name is required.");
            valid = false;
        }

        
        const email = $("#email").val().trim();
        const emailReges = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailReges.test(email)) {
            $("#emailError").text("Enter a valid email address.");
            valid = false;
        }

        
        const phone = $("#phone").val().trim();
        const phoneReges = /^[0-9]{10}$/;
        if (!phoneReges.test(phone)) {
            $("#phoneError").text("Enter a 10-digit phone number.");
            valid = false;
        }

        if (valid) {
            alert("Registration successful!");
            $("#registrationForm")[0].reset();
        }
    });
});
