//simple if statement
let confirmation = confirm("Are you wanted to See a Message from Admin");
// if an 'if statement' has only one line of code, we can choose to omit the curly braces {}
if(confirmation) alert("Please feel free to participate in further questions");

// 'if statement' with curly braces {}
if (confirm("Do you want to continue ?"))
  {
    alert("continued!");
  }





// if else example
let year = prompt('In which year was the ES6 specification published?', '');

if (year == 2015) {
  alert( 'You response is right!' );
} else {
  alert( 'Your response is incorrect!!' ); // any value except 2015
}





// if ... esle if   example
if (year == 2015)
{
  alert('ECMAScript 2015, or ES6, enhanced JavaScript with arrow functions, block-scoped variables (let, const), template literals, default parameters, and more. These additions modernized the language, improving readability and functionality.');
}
else if(year > 2015)
{
  alert('ECMAScript 2015, often referred to as ES6 (ECMAScript 6), is a significant update to them ECMAScript language specification. ECMAScript is the standard upon which JavaScript is based, defining the core features of the language. ES2015 brought several new features and improvements to JavaScript, enhancing its functionality and making it more expressive. ');
}
else{
  alert('You provided a smaller number of years. ECMAScript 2015, often referred to as ES6 (ECMAScript 6), is a significant update to them ECMAScript language specification.');
}




//nested if
if(year !== 2015)
{
  if(year >= 2013 && year <= 2018)
  {
    alert('Following ES6, ES2016-18, ES2019, and ES2021, ES2022 is the latest ECMAScript version, introducing enhancements such as `String.prototype.at()`, `Array.prototype.groupBy()`, and the Temporal object for date and time operations. However, not all browsers support every feature.');
  }
  else if(year <= 2013 && year >= 2018 && year >= 2000)
    {
     
    }
  else
    {
      var known1 = conform('Do you know what is JavaScript? ');

          if(known1)
          {
                alert('ECMAScript (ES) is a standardized scripting language specification developed by Ecma International. . It serves as the foundation for several programming languages, with JavaScript being the most prominent implementation.ECMAScript defines the syntax, semantics, and features that languages like JavaScript must adhere to. Popular browsers such as Chrome and Firefox implement JavaScript compilers in accordance with this standard.');
          }
          else
          {
                 alert("JavaScript is a high-level, versatile, and widely-used programming language primarily known for its role in web development. It allows developers to add dynamic content, interactivity, and functionality to websites. JavaScript is executed in web browsers, enabling client-side scripting, and also on servers through platforms like Node.js for server-side development.");
          }
    }
  
  
}
 


