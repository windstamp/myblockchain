pragma solidity 0.4.19;
contract demo {
    uint public a;
    function demo() {
        // a = now;
        a = 10000000000;
    }

    function addSeconds(uint num) {
        a += num;
    }

    function addMinutes(uint num) {
        a += num * 1 minutes;
    }

    function addHours(uint num) {
        a += num * 1 hours;
    }

    function addDays(uint num) {
        a += num * 1 days;
    }

    function addWeeks(uint num) {
        a += num * 1 weeks;
    }

    function addYears(uint num) {
        a += num * 1 years;
    }
}