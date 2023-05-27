"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedOrigins = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.allowedOrigins = [
    process.env.app_URL
];
