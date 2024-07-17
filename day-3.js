// Task 1 

let num = prompt("Enter Any Number :")

if (num > 0) {
    console.log("Given Number is Positive");
} else if (num < 0) {
    console.log("Given Number is Negative ");
}
else if (num == 0) {
    console.log("Given Number is Zero ");
}
else {
    console.log("Output : Enter a valid Number ");
}

// Task 2 

let age = prompt(" Aapki Age Kitni He ? ")

if (age < 18) {
    console.log(" Aap Vote nhi dal sakte :( ")
}

else if (age >= 18) {
    console.log(" Aap Vote dal sakte he :) ")
}

// Task 3 

let score = 85;

if (score < 50) {
    console.log("You failed.");
} else {
    if (score < 75) {
        console.log("You passed.");
    } else {
        if (score < 90) {
            console.log("You got a good score.");
        } else {
            console.log("You got an excellent score.");
        }
    }
}

// Task 4  Switch Case 

let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thousday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Enter a valid number")
}


// Task 5 

let number = prompt("Enter a Number ?"); // Example number, you can change this value

let result = (number % 2 === 0) ? "Even" : "Odd";

console.log(result); // Output: Odd
