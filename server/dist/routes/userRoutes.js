"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.route('/')
    .get(usersController_1.getAllUsers)
    .post(usersController_1.createUser)
    .patch(usersController_1.updateUser)
    .delete(usersController_1.deleteUser);
exports.default = router;
