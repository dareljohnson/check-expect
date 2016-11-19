check-expect
============= 

|version|_  |license|_  |downloads|_  |commitizen|_

.. |downloads| image:: http://img.shields.io/pypi/dm/check-expect.svg?style=flat
.. _downloads: https://npmjs.org/package/check-expect

.. |license| image:: https://github.com/dareljohnson/check-expect/LICENSE.md
.. _license: http://opensource.org/licenses/MIT

.. |version| image:: https://img.shields.io/npm/v/check-expect.svg
.. _version: https://www.npmjs.com/package/check-expect

.. _commitizen: http://commitizen.github.io/cz-cli/
.. |commitizen| image:: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg


check-expect is a simple unit testing framework for JavaScript development `<https://www.npmjs.com/package/check-expect>`_
JavaScript package. check-expect is a mature, viable way to make your test-driven development drive the design of your data,
and your data drive the design of your functions.  It's also a simple tool that allows you to execute unit tests inline
with your code, in a systematic way.

This is a fork of the original `checkexpect <https://github.com/dareljohnson/check-expect>`_, hosted on GitHub and
last updated in 2016.

Features
--------

* [x] Support for inline unit tests. check-expect will support test created in another directory as well.
* [x] Support for TDD and DDD development.
* [x] Support for Systematic Program Design methods using HtDD and HtDF recipes.
* [x] Support for code coded terminal (console) output.


TODO
--------
* [ ] GUI support.

Installation
------------

1. Install check-expect.

   .. code:: javascript

      npm install check-expect


2. Now you can now add a reference to the check-expect package like so.

   .. code:: javascript

      # import package
      var checkExpect = require('check-expect');


3. Write some code and test it using check-expect inline with your code.

   .. code:: javascript

      # import packages
      var checkExpect = require('check-expect');

      # define a function
      function = square (a) {
           return a * a;                   # could replace return statement with lambda statement: a => Math.pow(a,2)                        
      }                                    # from code_statement_B below.

      # examples
      var num_to_square = 12;
      var code_statement_A = 12 * 12;       # used in the function body

      # check the algor1thm design of our square function, and unit test it at the same time
      checkExpect(square, 12, 144, "Square of a number");

      # Or just pass our examples
      checkExpect(square, num_to_square, code_statement_A, "Square of a number");

      # Or use lambda expressions
      var code_statement_B = a => Math.pow(a,2);
      checkExpect(square, num_to_square, code_statement_B(12), "Square of a number");



4. Execute your JavaScript from the command line (terminal) to see the unit test results. Most tests usually fail (RED) in the beginning.

5. Refactor your code and execute your script until all functions under test, turn GREEN.

6. That's it! You're done.

Upgrades
-------------

1. Upgrade check-expect.

   .. code:: javascript

      npm update check-expect


That command will upgrade an existing installation of check-expect.


Configuration
-------------
None - No configuration needed.

Support
~~~~~~~~~~~~~~~~~~~~~~~~
For check-expect support contact me at `<dareljohnson@yahoo.com>`_

Project Issues
~~~~~~~~~~~~~~~~~~~~~~~~
Report a bug at https://github.com/dareljohnson/check-expect/issues

License
-------

This project originally started life as javascript unit test project. This project was
abandoned in 2013 and was brought back to life as check-expect by our team in
2016. In the process, most of the project was refactored and brought up to speed
with modern python best practices. The work done prior to the 2013 rewrite is
licensed under MIT. Improvements since then are licensed under MIT.
See `LICENSE <https://github.com/dareljohnson/checkexpect-py/LICENSE>`_ for more details.

SemVer
------

This project implements `Semantic Versioning <http://semver.org/>`_ .

Credits
-------

* `Darel Johnson <https://github.com/dareljohnson>`_
