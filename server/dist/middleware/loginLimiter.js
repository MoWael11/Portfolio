"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const logger_1 = require("./logger");
const loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 120 * 1000,
    max: 20,
    message: { message: 'Too many login attempts. Please try again after a 2 minutes' },
    handler: (req, res, next, options) => {
        (0, logger_1.logEvents)(`Too Many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log');
        res.status(options.statusCode).send(options.message);
    },
    //are just reccomentded for production
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers 
});
exports.default = loginLimiter;
