pragma solidity 0.4.19;
contract demo {
    uint public deadline;
    function demo() {
        deadline = now;
        deadline += 10;
    }

    modifier afterDeadline {
        if (now <= deadline) throw;
        _;
    }

    function f() afterDeadline returns (string s) {
        return "afterDeadline";
    }

    function g() afterDeadline returns (uint n) {
        n = 100;
    }
}