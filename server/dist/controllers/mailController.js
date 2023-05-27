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
exports.sendContactForm = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailerConfig_1 = __importDefault(require("../config/mailerConfig"));
const mailgen_1 = __importDefault(require("mailgen"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const sendContactForm = (name, email, message, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport(mailerConfig_1.default);
    const mailGenerator = new mailgen_1.default({
        theme: 'default',
        product: {
            name: 'Coffee Shop',
            link: 'https://www.coffeeshop.com'
        }
    });
    const response = {
        body: {
            name: name,
            email: email,
            message: message,
            phone: phone
        },
        outro: 'This is an automated message.'
    };
    const messageForMail = {
        from: process.env.EMAIL,
        to: process.env.MY_EMAIL,
        subject: 'New message from moWael.com',
        html: mailGenerator.generate(response)
    };
    transporter.sendMail(messageForMail).then(() => {
        return true;
    }).catch((err) => {
        return false;
    });
});
exports.sendContactForm = sendContactForm;
