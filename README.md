# check-expect

![version](https://img.shields.io/npm/v/check-expect.svg)

![downloads](https://img.shields.io/npm/dt/check-expect.svg)

![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)

![mit](http://img.shields.io/npm/l/express.svg)


check-expect is a simple unit testing framework for JavaScript development <a href="https://www.npmjs.com/package/check-expect" target="top">in a JavaScript package.</a>  check-expect is a mature, viable way to make your test-driven development drive the design of your data,
and your data drive the design of your functions.  It's also a simple tool that allows you to execute unit tests inline
with your code, in a systematic way.

This is a fork of the original <a href="https://github.com/dareljohnson/check-expect" target="top">check-expect</a>, hosted on GitHub and
last updated in 2016.

### Features

* [x] Support for inline unit tests. check-expect will support test created in another directory as well.
* [x] Support for TDD and DDD development.
* [x] Support for Systematic Program Design methods using HtDD and HtDF recipes.
* [x] Support for color coded terminal (console) output.

### TODO

* [ ] GUI support.

### Installation

1. Install check-expect.

   ```javascript

      npm install -g check-expect

   ```
2. Now you can now add a reference to the check-expect package like so.

   ```javascript

      // import package
      var checkExpect = require('check-expect');

   ```

3. Write some code and test it using check-expect inline with your code.

   ```javascript

      // import packages
      var checkExpect = require('check-expect');
      
      /* Usage and test modes
         checkExpect(function|object|type, mode, param, expected value, "a description of the test")
      
         checkExpect uses three Test Modes:
            - void_mode: for testing and designing algorithms with objects and primitive types
            - normal_mode: for testing and designing algorithms with primitive types
            - list_mode: for testing and designing algorithms with lists, objects and primitive types
         A test mode must be passed as the second argument to the checkExpect() function
      */
      var void_mode = 0;   
      var normal_mode = 1;
      var list_mode = 2;

      // define a function
      function square (a) {             // could replace return statement with
           return a * a;                // lambda statement: a => Math.pow(a,2)                        
      }                                 // from code_statement_B below.

      // examples
      var num_to_square = 12;
      var code_statement_A = 12 * 12;   // used in the function body

      // check the algorithm design of our square function, and unit test it at the same time
      checkExpect(square, normal_mode, 12, 144, "Square of a number");

      // Or just pass our examples
      checkExpect(square, normal_mode, num_to_square, code_statement_A, "Square of a number");

      // Or use lambda expressions
      var code_statement_B = a => Math.pow(a,2);
      checkExpect(square, normal_mode, num_to_square, code_statement_B(12), "Square of a number");

      // Or use JSON objects tested in void_mode
      var Person = {
         firstName:"John",
         lastName: "Doe",
         fullName: function () {
             return this.firstName + " " + this.lastName;
         }
      };
      checkExpect(Person.fullName(), void_mode, "void", "John Doe", "A test for fullnames");
      
      // Or use in testing functions that consume a list and produce a string
      var str1   = "Darel";
      var str2   = "Johnson";
      var param3 = [ "Darel", "Johnson"];

      function stringTogether (str1, str2){
          var newStr = "",
              str = [],
              numArgs = arguments.length;
          for(var i = 0; i < numArgs; i++){
              str = arguments[i];
              newStr += str +" ";
          }
          return newStr.trim();    
      }
      // should produce "Darel Johnson"
      checkExpect(stringTogether, normal_mode, param3, str1 +" "+ str2, "Concatenating strings");


   ```


4. Execute your JavaScript from the command line (terminal) to see the unit test results. Most tests usually fail (RED) in the beginning.

5. Refactor your code and execute your script until all functions under test, turn GREEN.

6. That's it! You're done.


Upgrades
-------------

1. Upgrade check-expect.

   ```javascript

      npm update -g check-expect

   ```

That command will upgrade an existing installation of check-expect.


### Configuration

None - No configuration needed.

### Support

For check-expect support contact me at <dareljohnson@yahoo.com>

### Project Issues

Report a bug at <https://github.com/dareljohnson/check-expect/issues>

## License

This project originally started life as JavaScript unit test project. This project was
abandoned in 2013 and was brought back to life as check-expect by our team in
2016. In the process, most of the project was refactored and brought up to speed
with modern python best practices. The work done prior to the 2013 rewrite is
licensed under MIT. Improvements since then are licensed under MIT.
See <a href="https://github.com/dareljohnson/check-expect/" target="top">LICENSE</a> for more details.

### SemVer

This project implements <a href="http://semver.org/" target="top">Semantic Versioning.</a>

## Credits

* Darel Johnson <https://github.com/dareljohnson>
