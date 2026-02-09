function generatePassword() {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@#$!123456789"; // Added Uppercase too

    for (let i = 0; i < 12; i++) { // Increased length to 12 for better security
        // Math.floor is better than Math.ceil to avoid index out of bounds
        let randomIndex = Math.floor(Math.random() * str.length);
        pass += str[randomIndex];
    }
    
    console.log("Generated:", pass);

    let pass1 = document.getElementById('pass1');
    pass1.innerHTML = pass;
}

// Initial call to show a password on load
generatePassword();