
// ____________SCOPE__________________________
function example1() {
    if (true) {
      var x = 10;
    }
    console.log(x); // Outputs: 10 (visible throughout the function)
  }
  example1();
  //console.log(x); // Error: x is not defined (outside the function)
  

//   -------------------------------------
function example2() {
    if (true) {
      let y = 20;
      const z = 30;
      console.log(y); // Outputs: 20 (visible within the block)
      console.log(z); // Outputs: 30 (visible within the block)
    }
    // console.log(y); // Error: y is not defined (outside the block)
    // console.log(z); // Error: z is not defined (outside the block)
  }
  example2();

  // ____________Redeclaring__________________________
  var xy = 10;
  var xy = 20; // Redeclaration with var is allowed
  console.log(xy); // Outputs: 20

  let y = 30;
  // let y = 40; // Error: Identifier 'y' has already been declared
  console.log(y); // Outputs: 30

  const z = 50;
  // const z = 60; // Error: Identifier 'z' has already been declared
 // z = 70; // Error: Assignment to constant variable
  console.log(z); // Outputs: 50

  // ____________Reassignment__________________________
  var anotherVariable = "Hello";
  console.log(anotherVariable); // Outputs: Hello
  // Reassigning the value
  anotherVariable = "World";
  console.log(anotherVariable); // Outputs: World

  let myVariable = 10;
  console.log(myVariable); // Outputs: 10
  // Reassigning the value
  myVariable = 20;
  console.log(myVariable); // Outputs: 20

  const piValue = 3.14;
  console.log(piValue); // Outputs: 3.14
   // Attempting to reassign will result in an error
  // Uncommenting the line below will cause a TypeError
 // piValue = 3.14159;

 // ____________Hoisting__________________________
 console.log(xyz); // Outputs: undefined
 var xyz = 5;
 console.log(xyz); // Outputs: 5

 // Uncommenting the line below results in a ReferenceError
// console.log(yz);
 let yz = 10;
 console.log(yz); // Outputs: 10

 // Uncommenting the line below results in a ReferenceError
// console.log(zx);
 const zx = 15;
 console.log(zx); // Outputs: 15




  

  
