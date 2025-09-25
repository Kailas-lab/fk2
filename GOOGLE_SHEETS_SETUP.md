# Google Sheets Integration Setup Guide

Follow these steps to integrate the contact form with your Google Sheet:

## Step 1: Set up Google Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Replace the default `Code.gs` content with the code from `google-apps-script.js`
4. Save the project with a name like "Future Key Contact Form"

## Step 2: Configure the Script

The script is already configured to use your Google Sheet ID:
- **Spreadsheet ID**: `1t9u-O8BOqY22Uf7F_0eBc3WTpdSnD2xNBpePpt5xs-k`
- **Sheet Name**: `Contact Form Responses`

## Step 3: Deploy as Web App

1. In Google Apps Script, click "Deploy" → "New deployment"
2. Choose type: "Web app"
3. Set execute as: "Me"
4. Set access: "Anyone" (this allows your website to send data)
5. Click "Deploy"
6. **IMPORTANT**: Copy the web app URL (it will look like: `https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec`)

## Step 4: Update the Contact Form

1. In `src/pages/Contact.tsx`, find this line:
```javascript
const scriptUrl = "https://script.google.com/macros/s/AKfycbxQJ8vKHGqY9wXzVqJ5rK3mN2pL4oP6qR7sT8uV9wX0yZ1aB2cD3eF4gH5iJ6kL7mN8oP/exec";
```

2. Replace the entire URL with your actual Google Apps Script web app URL

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears in a new sheet called "Contact Form Responses"
3. The script will automatically create the sheet and headers if they don't exist

## What the Script Does

- Creates a new sheet called "Contact Form Responses" if it doesn't exist
- Adds proper headers with green formatting to match your brand
- Stores all form submissions with timestamps
- Auto-resizes columns for better readability
- Handles CORS properly for web requests
- Provides error handling and success responses

## Important Notes

- **The current script URL in the code is a placeholder** - you MUST replace it with your actual deployed script URL
- The form will show a success message even if there are minor network issues (this prevents user frustration)
- All form data will be stored in your Google Sheet automatically
- The script is configured specifically for your sheet ID: `1t9u-O8BOqY22Uf7F_0eBc3WTpdSnD2xNBpePpt5xs-k`

## Troubleshooting

- **Form shows success but no data in sheet**: Check that you've deployed the Google Apps Script and updated the URL
- **Permission errors**: Make sure the script has permission to access your Google Sheet
- **CORS errors**: Ensure the web app is deployed with "Anyone" access
- **Wrong sheet**: Verify the spreadsheet ID matches your Google Sheet URL

## Security Notes

- The web app URL should be kept secure
- The script only accepts POST requests with form data
- Consider adding additional validation in the Apps Script if needed