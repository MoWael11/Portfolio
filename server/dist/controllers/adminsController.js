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
exports.deleteAdmin = exports.updateAdmin = exports.createAdmin = exports.getAllAdmins = void 0;
const User_1 = __importDefault(require("../models/User"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// @desc Get all admins
// @route GET /admins
// @access Private
exports.getAllAdmins = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const admins = yield User_1.default.find().select('-password').lean(); // to give just json with lean
    if (!(admins === null || admins === void 0 ? void 0 : admins.length)) {
        return res.status(400).json({ message: 'No admins found' });
    }
    res.json(admins);
}));
// @desc Create new admin
// @route POST /admins
// @access Private
exports.createAdmin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    const adminObject = { username, email, "password": hashedPassword, roles };
    // Create and store admin
    const admin = yield User_1.default.create(adminObject);
    if (admin) {
        res.status(201).json({ message: `New admin ${username} created` });
    }
    else {
        res.status(400).json({ message: 'Invalid admin data received' });
    }
}));
// @desc Update an admin
// @route PATCH  /admins
// @access Private
exports.updateAdmin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, username, email, roles, active, password } = req.body;
    if (!id || !username || !email || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const admin = yield User_1.default.findById(id).exec();
    if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
    }
    // Check for duplicate
    const duplicate = yield User_1.default.findOne({ username }).lean().exec();
    // allow updates to the original user 
    if (duplicate && (duplicate === null || duplicate === void 0 ? void 0 : duplicate._id.toString()) !== id) {
        return res.status(409).json({ message: 'Duplicate username' });
    }
    admin.username = username;
    admin.email = email;
    admin.roles = roles;
    admin.active = active;
    if (password) {
        // Hash password
        const hashedPassword = yield bcrypt_1.default.hash(password, 12); // salt rounds 
        admin.password = hashedPassword;
    }
    const updatedAdmin = yield admin.save();
    res.json({ message: `${updatedAdmin.username} updated` });
}));
// @desc Delete an admin
// @route DELETE  /admins
// @access Private
exports.deleteAdmin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'Admin ID required' });
    }
    const admin = yield User_1.default.findById(id).exec();
    if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
    }
    const result = yield admin.deleteOne();
    const reply = `Admin ${result.username} with ID ${result._id} deleted`;
    res.json(reply);
}));
