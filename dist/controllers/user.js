"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const newUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'New User',
        body
    });
};
exports.newUser = newUser;
const loginUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: `Login User`,
        body
    });
};
exports.loginUser = loginUser;
