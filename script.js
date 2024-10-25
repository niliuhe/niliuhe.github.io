const { google } = require('googleapis');
const fs = require('fs');


async function getSheetValues(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = '1cG4Tlm1YgdLCZKuivkSyy8pOcx-YzEZ5Trxh8GYvhDY'; // 替换为你的表格ID
  const range = '工作表1';
  const apiKey = 'AIzaSyAKMN26phfEvXQKd9o-za_hpzHlptGzBFA';

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
      key:apiKey,
    });
    // console.log(response.data.values);
    const data = response.data.values;
    const jsonData = Object.fromEntries(data.slice(1));
    fs.writeFile('config.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to config.json:', err);
      } else {
        console.log('config.json has been created successfully!');
      }
    });
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
  }
}

// 认证部分省略
getSheetValues();
