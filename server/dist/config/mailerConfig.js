"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailGenerator = void 0;
const dotenv_1 = require("dotenv");
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailgen_1 = __importDefault(require("mailgen"));
(0, dotenv_1.config)();
const mailConfig = {
    port: 465,
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
};
exports.mailGenerator = new mailgen_1.default({
    theme: 'default',
    product: {
        name: 'MoWael',
        link: process.env.app_URL,
        logo: 'https://raw.githubusercontent.com/MoWael11/cv/main/images/logo.png',
    }
});
exports.default = nodemailer_1.default.createTransport(mailConfig);
