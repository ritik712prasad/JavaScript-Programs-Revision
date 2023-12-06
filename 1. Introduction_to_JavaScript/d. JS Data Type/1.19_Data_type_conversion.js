// Example 1: Using typeof with variables
let num1 = 42;
let str1 = "Hello, world!";
//  the typeof operator is used to determine the type of a variable or an expression. 
console.log(typeof num1);  // Output: "number"
console.log(typeof str1); // Output: "string"
// _________________________________________________________________________________________

// Data Type Conversion

// console.log("after converting num (number) to string")

// Automatically Type Conversion 

//1. example
let first = 5 + null;
console.log(" 5 + null = ",first);
console.log("typeof 5 is : ", typeof 5);
console.log("typeof null is : ", typeof null);
console.log("but typeof 5 + null is : ", typeof first);

//2. example
let second = '5' + null;
let third = '5' + 3;
console.log("\n typeof '5' + null  is : ", typeof second);
console.log(" '5' + null = ",second);
console.log(" 44 + '5' = ", third);

let strNum1 = "42";
let result = 10 + strNum1; // Automatic conversion of strNum to number
console.log(result);


// ---------------------------------------------------------------------------------
// String Conversion Implicitly
console.log("25" + 56);        // '2556'
console.log("25" + null);       // '25null'
console.log("Ale " + undefined);// 'Ale undefined'
console.log("25" + false);      // '25false'

let num = 42;
let str = "10";
console.log(num > str);     // true (str is implicitly converted to a number)
console.log(num + str);     // "4210" (str is implicitly converted to a string and concatenated)
console.log(num | str);     // 42 (str is implicitly converted to a number)

let strNum = "10";
let numImplicit = +strNum;  // Implicit numeric conversion using unary +
console.log(numImplicit);   // 10

let numComparison = 42;
let strComparison = "42";
console.log(numComparison == strComparison); // true (str is implicitly converted to a number for comparison)

// In Developer console
console.log(5 == true);     // false

if (5) {
    console.log('5 is a truthy value'); // 5 is a truthy value
}

console.log('' || 23);      // 23, instead of giving true
console.log(!!2);            // true

let numBool = 42;
let isPositive = numBool > 0;  // isPositive will be true


const mySymbol = Symbol('mySymbol');
const symbolString = String(mySymbol);
console.log(symbolString);   // "Symbol(mySymbol)"

const mySymbolBool = Symbol('mySymbol');
const symbolBoolean = Boolean(mySymbolBool);
console.log(symbolBoolean);  // true (symbols are always truthy)

const mySymbolNum = Symbol('mySymbol');
try {
  const symbolNumber = Number(mySymbolNum); // TypeError: Cannot convert a Symbol value to a number
} catch (error) {
  console.error(error.message);
}


// String Conversion Explicitly
console.log(String(23));        // '23'
console.log(String(true));      // 'true'
console.log(String(32 - false)); // '32'
console.log(String(32 - true));  // '31'


// Explicit conversion into number
console.log(Number(" 12 "));      // 12
console.log(Number("-12.34"));    // -12.34
console.log(Number("\n"));        // 0

console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN

console.log(Number(true));        // 1
console.log(Number(false));       // 0

// Difference between results of the same prompt
console.log(prompt('what is your age?'));              // '26'
console.log(Number(prompt('what is your age?')));      // 26


// Boolean() Function is used
console.log(Boolean(2)); // true

// Points to Remember
console.log(Boolean(''));       // false
console.log(Boolean(0));        // false
console.log(Boolean(-0));       // false
console.log(Boolean(NaN));      // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(false));    // false



const mySymbolExp = Symbol('mySymbol');
const symbolStringExp = String(mySymbolExp);
console.log(symbolStringExp);     // "Symbol(mySymbol)"

const mySymbolBoolExp = Symbol('mySymbol');
const symbolBooleanExp = Boolean(mySymbolBoolExp);
console.log(symbolBooleanExp);    // true (symbols are always truthy)

const mySymbolNumExp = Symbol('mySymbol');
try {
  const symbolNumberExp = Number(mySymbolNumExp); // TypeError: Cannot convert a Symbol value to a number
} catch (error) {
  console.error(error.message);
}



