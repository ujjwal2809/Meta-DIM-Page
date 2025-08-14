function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e);
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Replace this with your actual Google Sheet ID
    // You can find this in your Google Sheet URL: https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your actual sheet ID
    
    let spreadsheet;
    let sheet;
    
    try {
      // Try to open the specific spreadsheet by ID
      spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      sheet = spreadsheet.getActiveSheet();
    } catch (error) {
      // If sheet doesn't exist or ID is wrong, create a new one
      console.log('Creating new spreadsheet...');
      spreadsheet = SpreadsheetApp.create('DevOps Form Submissions');
      sheet = spreadsheet.getActiveSheet();
      sheet.setName('Form Submissions');
      
      // Log the new sheet ID for user reference
      console.log('New spreadsheet created with ID:', spreadsheet.getId());
      console.log('Please update your script with this Sheet ID');
    }
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = ['Timestamp', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Experience'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setBorder(true, true, true, true, true, true);
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.phoneNumber || '',
      data.email || '',
      data.experience || ''
    ];
    
    // Add the data to the sheet
    const lastRow = sheet.getLastRow();
    const newRow = lastRow + 1;
    sheet.getRange(newRow, 1, 1, rowData.length).setValues([rowData]);
    
    // Format the new row
    const newRowRange = sheet.getRange(newRow, 1, 1, rowData.length);
    newRowRange.setBorder(true, true, true, true, true, true);
    
    // Alternate row colors for better readability
    if (newRow % 2 === 0) {
      newRowRange.setBackground('#f8f9fa');
    }
    
    // Auto-resize columns for better visibility
    sheet.autoResizeColumns(1, 6);
    
    console.log('Data successfully added to sheet at row:', newRow);
    
    // Return success response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form data saved successfully',
        timestamp: timestamp.toISOString(),
        rowNumber: newRow,
        sheetId: spreadsheet.getId()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to save form data: ' + error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
  }
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

// Handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'DevOps Form Handler is running',
      timestamp: new Date().toISOString(),
      note: 'Send POST requests with form data to submit'
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

// Test function to verify the script works
function testFormSubmission() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        phoneNumber: '1234567890',
        email: 'test@example.com',
        experience: '2-5'
      })
    }
  };
  
  const result = doPost(testData);
  console.log('Test result:', result.getContent());
}

// Function to create a new sheet with proper setup
function createFormSheet() {
  const spreadsheet = SpreadsheetApp.create('DevOps Form Submissions');
  const sheet = spreadsheet.getActiveSheet();
  sheet.setName('Form Submissions');
  
  // Add headers
  const headers = ['Timestamp', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Experience'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#4285f4');
  headerRange.setFontColor('white');
  headerRange.setBorder(true, true, true, true, true, true);
  
  // Set column widths
  sheet.setColumnWidth(1, 150); // Timestamp
  sheet.setColumnWidth(2, 120); // First Name
  sheet.setColumnWidth(3, 120); // Last Name
  sheet.setColumnWidth(4, 130); // Phone Number
  sheet.setColumnWidth(5, 200); // Email
  sheet.setColumnWidth(6, 150); // Experience
  
  console.log('New form sheet created!');
  console.log('Sheet ID:', spreadsheet.getId());
  console.log('Sheet URL:', spreadsheet.getUrl());
  
  return spreadsheet;
}