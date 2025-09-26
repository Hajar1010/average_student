# Student Message Program

A small JavaScript program that:

- Calculates the class average from an array of student scores.  
- Determines a single student's grade.  
- Displays a message indicating whether the student passed or failed.  

---

## Features

- `getAverage(scores)`: Calculates the average of all scores.  
- `getGrade(score)`: Returns a letter grade (`A++`, `A`, `B`, `C`, `D`, `F`).  
- `studentMsg(totalScores, studentScore)`: Generates a full message about class average, student grade, and pass/fail status.  

---

## Example Usage

```js```
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Output: Class average: 71.7. Your grade: F. You failed the course.

console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95], 82));
// Output: Class average: 85.4. Your grade: B. You passed the course.
## How to run 
1- Clone the repository:

````git clone https://github.com/yourusername/student-message.git````


2- Navigate into the folder:

```cd student-message```


3- Run the program with Node.js:

````node index.js````

##  Skills Practiced

- JavaScript functions
- Loops and conditionals
- String concatenation and output
- Using .length to work with arrays


