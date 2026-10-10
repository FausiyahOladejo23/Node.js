
require("dotenv").config();
const nodemailer = require("nodemailer");

// Configure the Gmail SMTP transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Define the email details
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send the email to yourself
    subject: "My Node.js Checkpoint",
    text: "Hello! This email was sent using Node.js and Nodemailer."
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Error sending email:", error.message);
        return;
    }

    console.log("Email sent successfully:", info.response);
});