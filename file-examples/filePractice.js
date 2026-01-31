const fs = require('fs');

//read file as text
const content = fs.readFileSync('./file-examples/student-responses.txt', 'utf8');

//split into array whenever there is a line break in file
const lines = content.split('\n');

//analyze data
console.log('Number of responses: ', lines.length);
console.log('First response: ',lines[0]);
console.log('Last response: ',lines[lines.length-1]);

const scoresText = fs.readFileSync('./file-examples/quiz-scores.txt','utf8');

//convert array into numbers
const lines = scoresText.split('\n');
const scores = [];

for(let i = 0; i<lines.length;i++) {
    const line = lines[i].trim(); //remove whitespace
    
    if (line.length > 0) {
        scores.push(parseFloat(line)); //convert to number
    }
}

console.log('Scores: ', scores);
console.log('Number of scores: ', scores.length);