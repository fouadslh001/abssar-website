# EmailJS Setup Guide for Contact Form

## Overview
This guide will help you configure EmailJS to send contact form submissions to your email: **salhanefouad@gmail.com**

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Follow the authentication process to connect your Gmail account
5. Note down the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your website contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

4. Save the template and note down the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., "user_def456")

## Step 5: Update Configuration
1. Open `src/config/emailConfig.js` in your project
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'your_actual_service_id',     // Replace with Service ID from Step 2
  templateId: 'your_actual_template_id',   // Replace with Template ID from Step 3
  publicKey: 'your_actual_public_key',     // Replace with Public Key from Step 4
  toEmail: 'salhanefouad@gmail.com'        // Already configured
}
```

## Step 6: Test the Contact Form
1. Run your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit a test message
4. Check your email (salhanefouad@gmail.com) for the message

## Troubleshooting
- **Form shows "Email service needs configuration"**: Update the config file with real values
- **Form shows "Failed to send message"**: Check browser console for errors
- **No email received**: 
  - Verify EmailJS service is connected properly
  - Check spam folder
  - Ensure template variables match exactly

## EmailJS Free Plan Limits
- 200 emails per month
- Perfect for contact forms
- Upgrade available if needed

## Security Note
The configuration values in `emailConfig.js` are safe to include in your frontend code as they are designed to be public keys for EmailJS.
