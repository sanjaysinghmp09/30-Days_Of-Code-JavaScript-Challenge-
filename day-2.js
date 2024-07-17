// Task  / Activities 

// Activity - 1 Arthmetic Operations 

// Task 1 : Write a program to add two numbers and log the result to the console 

let num1 = 10 ;
let num2 = 10 ;

// Task - 2 
let result1 = (num1+num2)

// Task - 3 
let result2 = (num1-num2)

// Task - 4 
let result3 = (num1*num2)

// Task - 5 
let result4 = (num1/num2)

console.log(`Result-1: ${result1} , Result-2: ${result2} , Result-3: ${result3} , Result-4: ${result4}`);


// Activity -2 

let number = 30;
let numberTwo = 100 ;
number +=10 
numberTwo -= 10 ;

console.log(`Number One Result: ${number} Number Two Result: ${numberTwo}` )

// Activity - 3 

let a = prompt("Enter a number :") ;
let b = prompt("Enter b number :") ;


if (a>b) {
    console("A is Greater Than B")
} else if(a=b) {
    console.log("A or B Is Equal :) ")
}
else {
    console.log("B is Greater Than A ")
}

// console.log(a>=b)
// console.log(a<=b)
// console.log(a==b)
// console.log(a===b)

// Function to combine two conditions using &&, ||, and ! operators
function combineConditions(a, b) {
    // Dono conditions sahi he
    if (a && b) {
      console.log("Both conditions are true");
    }
    
    // Ek ya dono conditions sahi he
    if (a || b) {
      console.log("One or both conditions are true");
    }
    
    // Dono conditions galat he
    if (!a && !b) {
      console.log("Both conditions are false");
    }
  }
  
  // Example usage
  let condition1 = true;
  let condition2 = false;
  
  combineConditions(condition1, condition2); 
  // Output: 
  // One or both conditions are true
  
  condition1 = false;
  condition2 = false;
  
  combineConditions(condition1, condition2); 
  // Output: 
  // Both conditions are false
  
  condition1 = true;
  condition2 = true;
  
  combineConditions(condition1, condition2); 
  // Output: 
  // Both conditions are true
  // One or both conditions are true
 
  