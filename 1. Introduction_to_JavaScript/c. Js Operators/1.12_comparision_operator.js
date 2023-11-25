// Equal (==)
console.log(5 == 5); // true
console.log("5" == 5); // true (type coercion)

// Not Equal (!=)
console.log(5 != 10); // true
console.log("5" != 5); // false (type coercion)

// Strict Equal (===)
console.log(5 === 5); // true
console.log("5" === 5); // false (strict comparison of different types)

// Strict Not Equal (!==)
console.log(5 !== "5"); // true
console.log(5 !== 5); // false (strict comparison of same type)

// Greater Than (>)
console.log(10 > 5); // true
console.log("10" > 5); // true (type coercion)

// Greater Than or Equal (>=)
console.log(10 >= 10); // true
console.log("10" >= 5); // true (type coercion)

// Less Than (<)
console.log(5 < 10); // true
console.log("5" < 10); // true (type coercion)

// Less Than or Equal (<=)
console.log(5 <= 5); // true
console.log("5" <= 10); // true (type coercion)
