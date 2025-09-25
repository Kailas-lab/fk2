/**
 * Google Apps Script for Future Key Contact Form
 * 
 * Instructions:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID with your Google Sheet ID: 1t9u-O8BOqY22Uf7F_0eBc3WTpdSnD2xNBpePpt5xs-k
 * 5. Deploy as a web app with execute permissions set to "Anyone"
 * 6. Copy the web app URL and replace the scriptUrl in Contact.tsx
 */

// Your Google Sheet ID from the URL
const SPREADSHEET_ID = '1t9u-O8BOqY22Uf7F_0eBc3WTpdSnD2xNBpePpt5xs-k';
const SHEET_NAME = 'fk-2'; // You can change this sheet name

function doPost(e) {
  try {
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Get or create the sheet
    let sheet;
    try {
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
    } catch (error) {
      // Create the sheet if it doesn't exist
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Add headers
      const headers = [
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Subject',
        'Message'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#10B981');
      headerRange.setFontColor('white');
    }
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 6);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form submitted successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

function doGet(e) {
  // Handle GET requests (optional, for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Google Apps Script is working!'
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

/**
 * Test function to verify the script works
 * You can run this function in the Apps Script editor to test
 */
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    subject: 'Test Subject',
    message: 'This is a test message',
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  console.log(result.getContent());
}