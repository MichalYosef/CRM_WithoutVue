"use strict";

/*

TODO: check the difference from this clusre sintax 
// Closure

function calcClosure() {
    var _history = [];

    const log = function(x, y, res) {
        _history.push('x: ' + x + ", y: " + y + " , result:" + res);
    }

    const getHistory = function () {
        return _history;
    }

    // Operations
    const mult = function(num1, num2) {
        log(num1, num2, num1*num2);
        return num1*num2;
    }

    const divide = function(num1, num2) {
        if (num2 === 0) {
            throw "Cannot divide by zero";
        }
        log(num1, num2, num1/num2);
        return num1 / num2;
    } 

    return {
        mult: mult,
        divide: divide,
        getHistory: getHistory
    }
}
*/