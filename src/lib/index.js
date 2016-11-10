"use strict";

/**
 * Main function
 *    checkExpect
 * @return {Type} : None
 */

var colors = require('colors');
var clear = require('clear');

// reporting module
var results = {
    total: 0,
    bad: 0
};

function printTestResults() {
  console.log("\n============Test Summary==============");
  console.log("Of " + results.total + " tests, " + results.bad + " failed, ".red + (results.total - results.bad) + " passed".green);
}

// check Expect
function checkExpect(f, mode, param, expected, name) {
    //clear();
    results.total++;
    let result;
    if (mode <= 1 && param !== "void") {
        result = f.call(this, param);
    } else if (mode >= 2) {
        result = f.apply(this, param);
    } else if (mode === 0 && param === "void") {
        result = f;
    }

    if (name !== undefined) {
        console.log("\nfor unit test: " + name);
    } else {
        console.log("for unit test: " + "unknown test");
    }
    if (result !== expected) {
        results.bad++;
        console.log("test: " + "failed".red);
        console.log("Expected " + expected + ", but was " + result);
    } else {
        console.log("test: " + "passed".green);
    }
    printTestResults();
}

module.exports = checkExpect;