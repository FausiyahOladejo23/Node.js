
const generatePassword = require("generate-password");

// Create a function that generates a random password
function createPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        uppercase: true,
        lowercase: true,
        symbols: true
    });

    // Display the generated password
    console.log("Generated password:", password);
}

// Call the function
createPassword();