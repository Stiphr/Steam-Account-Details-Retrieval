# Account Details Retrieval

This script allows you to fetch account details from a text file or an Excel file and export the data to either a text file or an Excel file.

## Prerequisites

- Node.js and npm should be installed on your machine.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-repository.git

2. Navigate to the project directory:

   ```shell
   cd your-repository

3. Install dependencies:

   ```shell
   npm install

## Usage
  
1. Run the script:

   ```shell
   node script.js

2. Follow the prompts:

   - Enter the file name for account details retrieval (provide the path to the file).
   - Enter the number of accounts to export.
   - The script will fetch the account details based on the file format and export the data accordingly.

3. Once the process is complete, the exported data will be saved in the corresponding format:

   - For text file export: exported-accounts.txt
   - For Excel file export: exported-accounts.xlsx

## File Formats
   - Text file (.txt): The script reads the provided text file, retrieves the specified number of accounts, and exports the data to an Excel file.
   - Excel file (.xlsx): The script reads the provided Excel file, retrieves the specified number of accounts, and exports the data to a text file.

## Dependencies

The following npm packages are used in this script:

   - `fs`: File system module for reading and writing files.
   - `path`: Path module for working with file paths.
   - `xlsx`: Library for parsing and manipulating Excel files.
