"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const verifyJWT_1 = __importDefault(require("../middleware/verifyJWT"));
const router = (0, express_1.Router)();
router.route('/')
    .get(usersController_1.getAllUsers)
    .post(usersController_1.createUser);
router.route('/:id')
    .get(verifyJWT_1.default, usersController_1.getAllUsers)
    .patch(verifyJWT_1.default, usersController_1.updateUser);
exports.default = router;
