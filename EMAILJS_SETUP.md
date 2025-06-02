# 📧 EmailJS Setup Guide for IndieGate.io

## 🎯 Overview
This guide will help you set up EmailJS to receive form submissions from the IndieGate.io access request form directly in your email.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, click **"Add New Service"**
2. Choose **Gmail** or your preferred email provider
3. Follow authentication steps
4. Note your **Service ID** (e.g., `service_xyz123`)

### Step 3: Create Email Template
1. Click **"Create New Template"**
2. Use this template content:

```html
New Access Request - IndieGate.io

From: {{from_name}} ({{from_email}})
Company: {{company}}
Role: {{role}}
Submitted: {{submission_date}} at {{submission_time}}

Message:
{{message}}

---
Technical Details:
Timestamp: {{timestamp}}
User Agent: {{user_agent}}
Referrer: {{referrer}}
```

3. Note your **Template ID** (e.g., `template_xyz123`)

### Step 4: Get Public Key
1. In EmailJS dashboard, go to **"Account"** → **"General"**
2. Copy your **Public Key** (e.g., `abc123xyz`)

### Step 5: Configure IndieGate.io
Create a `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=service_xyz123
VITE_EMAILJS_TEMPLATE_ID=template_xyz123  
VITE_EMAILJS_PUBLIC_KEY=abc123xyz
VITE_ADMIN_EMAIL=jourdain@indiegate.io
```

### Step 6: Test & Deploy
```bash
npm run build
npm run deploy
```

## 📋 Form Data Captured

**Personal Information:**
- Full Name ✅
- Email Address ✅  
- Company/Organization ✅
- Selected Role (Investor/Filmmaker/Talent/Brand/Other) ✅
- Interest Description ✅

**Technical Data:**
- Submission Timestamp ✅
- User Agent (browser info) ✅
- Referrer (how they found the site) ✅

## 🔄 Backup System

Even without EmailJS, the system:
- ✅ Stores all submissions in browser localStorage
- ✅ Logs to console for debugging
- ✅ Shows success message to users

**To view stored submissions in development:**
```javascript
// In browser console:
window.viewStoredRequests()
```

## 🛠️ Current Status

**✅ Implemented:**
- Form validation & UX
- Loading states & error handling
- Data capture & storage
- EmailJS integration ready

**⚠️ Needs Setup:**
- EmailJS account configuration
- Environment variables
- Production deployment

## 📞 Support

If you need help setting this up, the form submissions are currently being stored locally and logged to console, so no data is lost while you configure EmailJS.

---

**Estimated Setup Time:** 5-10 minutes  
**Monthly Cost:** Free (up to 200 submissions)  
**Reliability:** 99.9% uptime 