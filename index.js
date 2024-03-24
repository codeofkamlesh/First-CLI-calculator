#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "choose the operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional Statement
if (answer.operator === "Addition") {
    console.log("Your answer is ", answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your answer is ", answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your answer is ", answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log("Your answer is ", answer.firstnumber / answer.secondnumber);
}
else {
    console.log("choose the valid operator");
}
