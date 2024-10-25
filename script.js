// // script.js
// console.log("This code runs on a schedule!");
// // 你可以添加其他功能，比如 API 请求等
// async function fetchSheetData() {
//     const sheetId = '1cG4Tlm1YgdLCZKuivkSyy8pOcx-YzEZ5Trxh8GYvhDY';
//     const apiKey = 'AIzaSyAKMN26phfEvXQKd9o-za_hpzHlptGzBFA';
//     const range = 'Sheet1';
    
//     const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
//     const data = await response.json();
    
//     if (data.values) {
//         console.log('Data:', data);
//         console.log('Data:', data.values);
//     } else {
//         console.log('No data found.');
//     }
// }
// fetchSheetData();

const { google } = require('googleapis');

async function getSheetValues(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = '1cG4Tlm1YgdLCZKuivkSyy8pOcx-YzEZ5Trxh8GYvhDY'; // 替换为你的表格ID
  const range = 'Sheet1!A1:D5';

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    console.log("11111");
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
  }
}

// 认证部分省略

