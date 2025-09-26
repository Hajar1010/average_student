// author : Hajar1010
// description: A small JavaScript program that calculate the student averge and  returns either they failed or passed the test.
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}


function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}


function studentMsg(totalScores, studentScore) {
  let classAvr = getAverage(totalScores);
  let grade = getGrade(studentScore);

  if (grade !== "F") {
    return "Class average: " + classAvr + ". Your grade: " + grade + ". You passed the course.";
  } else {
    return "Class average: " + classAvr + ". Your grade: " + grade + ". You failed the course.";
  }
}


console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([45, 87, 98, 100, 86, 94, 67, 88, 94, 95], 82));
console.log(studentMsg([60, 70, 80, 90, 100], 100));