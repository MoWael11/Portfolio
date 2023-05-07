"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
router.route('/')
    .get(usersController_1.getAllAdmins)
    .post(usersController_1.createAdmin)
    .patch(usersController_1.updateAdmin)
    .delete(usersController_1.deleteAdmin);
exports.default = router;
