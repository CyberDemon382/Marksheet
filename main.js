#! usr/bin/env node
import inquirer from "inquirer";
const marks = await inquirer.prompt([
  {
    message: "Enter Your Name!",
    type: "input",
    name: "name",
  },
  {
    message: "Enter Your Class/Grade!",
    type: "number",
    name: "class",
  },
  {
    message: "Enter Your Marks For Maths",
    type: "number",
    name: "maths",
  },
  {
    message: "Enter Your Marks For English",
    type: "number",
    name: "english",
  },
  {
    message: "Enter Your MArks For PST",
    type: "number",
    name: "pst",
  },
  {
    message: "Enter Your Marks For Science",
    type: "number",
    name: "science",
  },
  {
    message: "Enter Your Total Marks",
    type: "number",
    name: "totalMarks",
  },
]);
console.log(
  "This program only takes values for 4 subjects and based on the marks generates the percenatge and grade"
);
console.log("Name:", marks.name);
console.log("Class/Grade", marks.class);
const totalObtainedMArks =
  marks.maths + marks.english + marks.pst + marks.science;
const percentage = (totalObtainedMArks / marks.totalMarks) * 100;
console.log("Your percentage is =", percentage);
if (percentage === 100) {
  console.log("Your Grade Is A+");
} else if (percentage >= 90) {
  console.log("Your Grade is A");
} else if (percentage >= 80) {
  console.log("Your Grade is B");
} else if (percentage >= 70) {
  console.log("Your Grade is C");
} else if (percentage >= 60) {
  console.log("Your Grade is D");
} else {
  console.log("You have Failed. Try Again next Time!");
}
