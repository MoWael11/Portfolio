"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.refresh = exports.login = void 0;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// @desc Login
// @route POST /auth
// @access Public
exports.login = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const foundUser = yield User_1.default.findOne({ username }).exec();
    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const match = yield bcrypt_1.default.compare(password, foundUser.password);
    if (!match)
        return res.status(401).json({ message: 'Unauthorized' });
    const accessToken = jsonwebtoken_1.default.sign({
        "UserInfo": {
            "username": foundUser.username,
        }
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
    const refreshToken = jsonwebtoken_1.default.sign({ "username": foundUser.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
    // Create secure cookie with refresh token 
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000 //cookie expiry: set to match rT
    });
    // Send accessToken containing username and roles 
    res.json({ accessToken });
}));
// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
    const cookies = req.cookies; // console.log(req);
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.jwt))
        return res.status(401).json({ message: 'Unauthorized' });
    const refreshToken = cookies.jwt;
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            return res.status(403).json({ message: 'Forbidden' });
        const foundUser = yield User_1.default.findOne({ username: decoded.username }).exec();
        if (!foundUser)
            return res.status(401).json({ message: 'Unauthorized' });
        const accessToken = jsonwebtoken_1.default.sign({
            "UserInfo": {
                "username": foundUser.username,
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
        res.json({ accessToken });
    }));
};
exports.refresh = refresh;
// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies;
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.jwt))
        return res.sendStatus(204); //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'none', secure: true });
    res.json({ message: 'Cookie cleared' });
};
exports.logout = logout;
