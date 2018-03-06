pragma solidity 0.4.19;

contract Demo {
    enum ActionCode {Left,Right, Forward}
    ActionCode public b2;

    function Demo() {
        b2 = ActionCode.Left;
    }

    function Left() {
        b2 = ActionCode.Left;
    }

    function Right() {
        b2 = ActionCode.Right;
    }

    function Forward() {
        b2 = ActionCode.Forward;
    }

    function f() returns (string str) {
        if (b2 == ActionCode.Left) return "Left";
        if (b2 == ActionCode.Right) return "Right";
        if (b2 == ActionCode.Forward) return "Forward";
    }
}