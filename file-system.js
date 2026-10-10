
const fs = require("fs");

// Create welcome.txt and write the required message
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) {
        console.error("Error creating file:", err);
        return;
    }

    console.log("welcome.txt created successfully.");

    // Read the file after writing it
    fs.readFile("welcome.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        // Display the contents in the terminal
        console.log(data);
    });
});