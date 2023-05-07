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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getAllUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// @desc Get all users
// @route GET /users
// @access Private
exports.getAllUsers = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.find().select('-password').lean(); // to give just json with lean
    if (!(users === null || users === void 0 ? void 0 : users.length)) {
        return res.status(400).json({ message: 'No users found' });
    }
    res.json(users);
}));
// @desc Create new user
// @route POST /users
// @access Private
exports.createUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, roles } = req.body;
    // Confirm data
    if (!username || !email || !password) {
        console.log(username, email, password);
        return res.status(400).json({ message: 'All fields are required' });
    }
    // Check for duplicate
    const duplicate = yield User_1.default.findOne({ $or: [{ email }, { username }] }).lean().exec(); // to get error reporting the exec() is needed to run the query and return the result with a promise
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate email or username' });
    }
    // Hash password
    const hashedPassword = yield bcrypt_1.default.hash(password, 12); // salt rounds 
    const userObject = { username, email, "password": hashedPassword, roles };
    // Create and store user
    const user = yield User_1.default.create(userObject);
    if (user) {
        res.status(201).json({ message: `New user ${username} created` });
    }
    else {
        res.status(400).json({ message: 'Invalid user data received' });
    }
}));
// @desc Update an user
// @route PATCH  /users
// @access Private
exports.updateUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, username, email, roles, active, password } = req.body;
    if (!id || !username || !email || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const user = yield User_1.default.findById(id).exec();
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    // Check for duplicate
    const duplicate = yield User_1.default.findOne({ username }).lean().exec();
    // allow updates to the original user 
    if (duplicate && (duplicate === null || duplicate === void 0 ? void 0 : duplicate._id.toString()) !== id) {
        return res.status(409).json({ message: 'Duplicate username' });
    }
    user.username = username;
    user.email = email;
    user.roles = roles;
    user.active = active;
    if (password) {
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 12); // salt rounds 
        user.password = hashedPassword;
    }
    const updatedUser = yield user.save();
    res.json({ message: `${updatedUser.username} updated` });
}));
// @desc Delete an user
// @route DELETE  /users
// @access Private
exports.deleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'User ID required' });
    }
    const user = yield User_1.default.findById(id).exec();
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    const result = yield user.deleteOne();
    const reply = `User ${result.username} with ID ${result._id} deleted`;
    res.json(reply);
}));
