let x = 10; // Initial value of x
// Assignment
x = x + 5;
console.log("Assignment:", x); // Output: 15

// Addition assignment
x += 5;
console.log("Addition assignment:", x); // Output: 20

// Subtraction assignment
x -= 5;
console.log("Subtraction assignment:", x); // Output: 15

// Multiplication assignment
x *= 5;
console.log("Multiplication assignment:", x); // Output: 75

// Division assignment
x /= 5;
console.log("Division assignment:", x); // Output: 15

// Remainder assignment
x %= 5;
console.log("Remainder assignment:", x); // Output: 0

// Exponentiation assignment
x **= 5;
console.log("Exponentiation assignment:", x); // Output: 0

// Left shift assignment
x <<= 2;
console.log("Left shift assignment:", x); // Output: 0

// Right shift assignment
x >>= 2;
console.log("Right shift assignment:", x); // Output: 0

// Unsigned right shift assignment
x >>>= 2;
console.log("Unsigned right shift assignment:", x); // Output: 0

// Bitwise AND assignment
x &= 7;
console.log("Bitwise AND assignment:", x); // Output: 0

// Bitwise XOR assignment
x ^= 5;
console.log("Bitwise XOR assignment:", x); // Output: 5

// Bitwise OR assignment
x |= 2;
console.log("Bitwise OR assignment:", x); // Output: 7

// Logical AND assignment
x &&= false;
console.log("Logical AND assignment:", x); // Output: false

// Logical OR assignment
x ||= true;
console.log("Logical OR assignment:", x); // Output: true

// Nullish coalescing assignment
let y;
y ??= 5;
console.log("Nullish coalescing assignment:", y); // Output: 5
