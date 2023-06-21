const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

function fetchTextData(filePath, numRows) {
  try {
    const lines = fs.readFileSync(filePath, 'utf8').split('\n').slice(1, numRows + 1);
    const data = lines.map(line => line.trim());
    return data;
  } catch (error) {
    console.log(`An error occurred while fetching accounts from the text file: ${error.message}`);
    return [];
  }
}

function fetchExcelData(filePath, numRows) {
  try {
    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
    const data = jsonData.slice(1, numRows + 1).map(row => row.slice(0, 4).join(':'));
    return data;
  } catch (error) {
    console.log(`An error occurred while fetching accounts from the Excel file: ${error.message}`);
    return [];
  }
}

function exportToExcel(data) {
  try {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.aoa_to_sheet(data.map(row => row.split(':')));
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    xlsx.writeFile(workbook, 'exported-accounts.xlsx');
    console.log('Exported data saved in exported_data.xlsx.');
  } catch (error) {
    console.log(`An error occurred while exporting accounts to Excel: ${error.message}`);
  }
}

function exportToText(data) {
  try {
    const content = data.join('\n');
    fs.writeFileSync('exported-accounts.txt', content);
    console.log('Exported data saved in accounts.txt.');
  } catch (error) {
    console.log(`An error occurred while saving the exported accounts: ${error.message}`);
  }
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the file name for account details retrieval: ', (filePath) => {
  readline.question('Enter the number of accounts to export: ', (numRows) => {
    const extension = path.extname(filePath).toLowerCase();
    const numRowsInt = parseInt(numRows);

    if (extension === '.txt') {
      const exportedData = fetchTextData(filePath, numRowsInt);
      exportToExcel(exportedData);
    } else if (extension === '.xlsx') {
      const exportedData = fetchExcelData(filePath, numRowsInt);
      exportToText(exportedData);
    } else {
      console.log('Unsupported file format. Please provide a text file (.txt) or an Excel file (.xlsx).');
    }

    readline.close();
  });
});