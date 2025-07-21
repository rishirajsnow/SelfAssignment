const form = document.getElementById("registrationForm");
const summaryBox = document.getElementById("summary");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); //Prevent page reload

      // Clear previous errors
      document.querySelectorAll(".error").forEach(err => err.textContent = "");

      const formData = new FormData(form);
      const fullname = formData.get("fullname").trim();
      const email = formData.get("email").trim();
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const gender = formData.get("gender");
      const terms = formData.get("terms");

      let isValid = true;

      if (fullname === "") {
        document.getElementById("fullnameError").textContent = "Full name is required";
        isValid = false;
      }

      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        isValid = false;
      }

      if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
      }

      if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
      }

      if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender";
        isValid = false;
      }

      if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms";
        isValid = false;
      }

      if (isValid) {
        // Display summary (excluding passwords)
        summaryBox.style.display = "block";
        summaryBox.innerHTML = ""; // Clear previous summary
        let h3 = document.createElement("h3");
        h3.textContent = "Registration Sucessful!";
        summaryBox.appendChild(h3); 
        let namePara = document.createElement("p");
        namePara.textContent = `Full Name: ${fullname}`;
        summaryBox.appendChild(namePara);
        let emailPara = document.createElement("p");
        emailPara.textContent = `Email: ${email}`;
        summaryBox.appendChild(emailPara);
        
        form.reset();
      }
    });