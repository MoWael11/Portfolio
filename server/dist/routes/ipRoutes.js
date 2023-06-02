"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const ipController_1 = require("../controllers/ipController");
router.route('/')
    .post(ipController_1.addIp);
exports.default = router;
