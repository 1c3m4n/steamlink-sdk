/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.12/15.12.1/15.12.1.1/15.12.1.1-g1-4.js
 * @description The JSON lexical grammar treats <SP> as a whitespace character
 */


function testcase() {
 if (JSON.parse(' 1234')!=1234) return false; // <SP> should be ignored
  try {
    JSON.parse('12 34'); // <SP> should produce a syntax error as whitespace results in two tokens
    }
  catch (e) {
      if (e.name === 'SyntaxError') return true;
      }
  }
runTestCase(testcase);
