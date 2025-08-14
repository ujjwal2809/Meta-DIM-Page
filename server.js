const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can change this to your preferred email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
    pass: process.env.EMAIL_PASS || 'your-app-password'     // Replace with your app password
  }
});

// Form submission endpoint
app.post('/api/submit-form', async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, email, experience } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !phoneNumber || !email || !experience) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email content
    const emailContent = `
      <h2>New DevOps Course Inquiry</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Phone:</strong> ${phoneNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Experience Level:</strong> ${experience}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'support@devopsinstitutemumbai.co.in',
      subject: `New Course Inquiry from ${firstName} ${lastName}`,
      html: emailContent
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit form. Please try again.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});