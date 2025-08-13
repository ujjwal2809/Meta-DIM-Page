function doPost(e) {
  try {
    // Log the incoming request for debugging
    console.log('Received POST request:', e);
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    console.log('Parsed data:', data);
    
    // Get the active spreadsheet (or create one if it doesn't exist)
    let sheet;
    try {
      sheet = SpreadsheetApp.getActiveSheet();
    } catch (error) {
      // If no active sheet, create a new spreadsheet
      const spreadsheet = SpreadsheetApp.create('DevOps Form Submissions');
      sheet = spreadsheet.getActiveSheet();
      sheet.setName('Form Submissions');
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
    sheet.getRange(lastRow + 1, 1, 1, rowData.length).setValues([rowData]);
    
    // Auto-resize columns for better visibility
    sheet.autoResizeColumns(1, 6);
    
    console.log('Data successfully added to sheet');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Form data saved successfully',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Failed to save form data: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'DevOps Form Handler is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
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