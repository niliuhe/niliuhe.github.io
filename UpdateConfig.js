const { google } = require('googleapis');
const fs = require('fs');


async function getSheetValues(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = '1cG4Tlm1YgdLCZKuivkSyy8pOcx-YzEZ5Trxh8GYvhDY';
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
    // 处理数据，将第一列作为key，第二和第三列组成一个数组作为value
    const jsonData = data.slice(1).reduce((acc, row) => {
    const key = row[0]; // 第一列作为key
    const value = row[2] ? [row[1], row[2]] : row[1]; // 第二和第三列组成数组
    acc[key] = value; // 将key-value对添加到对象中
    return acc;
  }, {});
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

getSheetValues();
