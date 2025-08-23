# EmailJS Troubleshooting Guide

## Issue: Form shows "success" but no emails received

### Step 1: Check EmailJS Dashboard
1. Go to https://dashboard.emailjs.com/
2. Log in with your account
3. Check the "History" tab to see if emails are being sent
4. Look for any error messages or failed attempts

### Step 2: Verify Email Template
Your template should include these variables:
- `{{from_name}}` - sender's name
- `{{from_email}}` - sender's email  
- `{{message}}` - message content
- `{{to_name}}` - your name (Salhane Fouad)
- `{{to_email}}` - your email (salhanefouad@gmail.com)
- `{{reply_to}}` - sender's email for replies

**Example Template:**
```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your website contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

---
Reply to: {{reply_to}}
Sent to: {{to_email}}
```

### Step 3: Check Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Make sure your Gmail service is connected and active
3. Test the connection by clicking "Test" button

### Step 4: Check Spam Folder
- Check your Gmail spam/junk folder
- Look for emails from EmailJS or your domain

### Step 5: Verify Service IDs
Current configuration:
- Service ID: `service_mixm9cl`
- Template ID: `template_sa6kj9f`
- Public Key: `0UvkZVjN8cYI2CoQC`

Make sure these match exactly in your EmailJS dashboard.

### Step 6: Test with Simple Template
Create a minimal test template:
```
Subject: Test Email

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```

### Step 7: Check Browser Console
1. Open browser developer tools (F12)
2. Go to Console tab
3. Submit the form and check for any error messages

### Step 8: Alternative Testing
Try sending a test email directly from EmailJS dashboard to verify your email service is working.

## Quick Fix Checklist
- [ ] Check EmailJS History tab for sent emails
- [ ] Verify template variables match exactly
- [ ] Check spam folder
- [ ] Test email service connection
- [ ] Verify Service/Template IDs are correct
- [ ] Check browser console for errors
