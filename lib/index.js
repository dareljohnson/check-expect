"use strict";

/**
 * Main function
 *
 * @return {Type}
 */
var colors = require('colors');

// reporting module
var results = {
  total: 0,
  bad: 0
};

printTestResults = function printTestResults() {
  console.log("=========================================");
  console.log("<span style=font-weight:medium>Of</span> " + results.total + " tests, " + results.bad + "<span style=color:red> failed, </span>" + (results.total - results.bad) + "<span style=color:green> passed.</span>");
};

// check Expect
checkExpect = function checkExpect(f, mode, param, expected, name) {

  var result;
  if (mode <= 1 && param !== "void") {
    result = f.call(this, param);
  } else if (mode >= 2) {
    result = f.apply(this, param);
  } else if (mode === 0 && param === "void") {
    result = f;
  }

  if (name !== undefined) {
    console.log("for unit test: " + name);
  } else {
    console.log("for unit test: " + "unknown test");
  }
  if (result !== expected) {
    results.bad++;
    console.log("test: " + "<span style=color:red> failed </span>");
    console.log("Expected " + expected + ", but was " + result);
  } else {
    console.log("test: " + "<span style=color:green> passed </span>");
  }
  printTestResults();

  return results.total++;
};

module.exports = checkExpect;