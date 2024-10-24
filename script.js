// script.js
console.log("This code runs on a schedule!");
// 你可以添加其他功能，比如 API 请求等
const sheetId = '1cG4Tlm1YgdLCZKuivkSyy8pOcx-YzEZ5Trxh8GYvhDY';
const apiKey = 'AIzaSyAKMN26phfEvXQKd9o-za_hpzHlptGzBFA';
const range = 'Sheet1';

const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
const data = await response.json();

if (data.values) {
    console.log('Data:', data.values);
} else {
    console.log('No data found.');
}
