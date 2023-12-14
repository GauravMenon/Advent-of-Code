const fs = require('fs')
const readline = require('readline')

const filePath = 'DayOne/Input.txt'
const arr = []
var sum = 0

// Reads the file and does the calculation
fs.readFile(filePath, 'utf-8', (err, fileContent) => {
   if (err) {
      console.error('Error reading the file: ${error.message}')
      return
   }

   const lines = fileContent.split('\n')
   
   for (let i = 0; i < lines.length; i++){
      var string = lines[i]
      var combNum = extractNumbers(string)
      arr.push(combNum)
   }

   for (i = 0; i < arr.length; i++) {
      num = Number(arr[i])
      sum += num 
   }
   console.log(arr)
   console.log('The sum of the combined numbers is: ' + sum)
})


// Function to extract the first and last numbers from a string
function extractNumbers(str) {

   // Used to map the words from the regex into their respective numbers
   const wordToNumber= {
      one: '1e',
      two: '2o',
      three: '3e',
      four: '4r',
      five: '5e',
      six: '6x',
      seven: '7n',
      eight: '8t',
      nine: '9e'
   }
   
   const regex = new RegExp(Object.keys(wordToNumber).join('|'), 'gi');
   const resultString = str.replace(regex, match => wordToNumber[match.toLowerCase()]);
   const resultString2 = resultString.replace(regex, match => wordToNumber[match.toLowerCase()]);
   
   // Match all numbers in the string using a regular expression
   const numbers = resultString2.match(/\d/g);
 
   if (!numbers || numbers.length === 0) {
     // No numbers found in the string
     return null;
   }
 
   // Extract the first and last numbers
   const firstNumber = numbers[0];
   const lastNumber = numbers[numbers.length - 1];
 
   // Combine the first and last numbers
   const combinedResult = `${firstNumber}${lastNumber}`;
 
   return combinedResult;
 }