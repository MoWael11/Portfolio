"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReport = exports.sendContactForm = void 0;
const mailerConfig_1 = __importStar(require("../config/mailerConfig"));
const dotenv_1 = require("dotenv");
const date_fns_1 = require("date-fns");
const ipController_1 = require("../controllers/ipController");
(0, dotenv_1.config)();
const sendContactForm = (res, name, email, message, phone) => __awaiter(void 0, void 0, void 0, function* () {
    const mail = {
        body: {
            intro: 'A new message has been sent from your website',
            name: 'Mohamed',
            table: {
                data: [
                    {
                        title: 'Name',
                        content: name,
                    },
                    {
                        title: 'Email',
                        content: email,
                    },
                    {
                        title: 'Phone',
                        content: phone,
                    },
                    {
                        title: 'Message',
                        content: message,
                    }
                ],
                columns: {
                    // Optionally, customize the column widths
                    customWidth: {
                        title: '20%',
                    },
                }
            },
        },
    };
    const messageForMail = {
        from: process.env.EMAIL,
        to: process.env.MY_EMAIL,
        subject: 'New contact form submission from MoWael.com',
        html: mailerConfig_1.mailGenerator.generate(mail)
    };
    try {
        yield mailerConfig_1.default.sendMail(messageForMail);
        res.status(200).json("Thank you for reaching out! I'll get back to you as soon as possible.");
    }
    catch (err) {
        console.error('Error while sending email:', err);
        res.status(500).json('An error occurred while sending the message, please try later.');
    }
});
exports.sendContactForm = sendContactForm;
const sendReport = () => __awaiter(void 0, void 0, void 0, function* () {
    const ips = yield (0, ipController_1.getAllIp)();
    if (!ips.length)
        return;
    const date = new Date();
    const fomrattedDate = (0, date_fns_1.format)(date, 'dd/MM/yyyy');
    const ipsObject = ips.map(ip => {
        return {
            country: ip.country,
            city: ip.city,
            ip: ip.ipAddress
        };
    });
    const mail = {
        body: {
            intro: `it's ${fomrattedDate} and you have ${ips.length} visitors on your website`,
            name: 'Mohamed',
            table: {
                data: ipsObject,
                columns: {
                    customWidth: {
                        country: '20%',
                        city: '20%',
                    },
                }
            },
        },
    };
    const messageForMail = {
        from: process.env.EMAIL,
        to: process.env.MY_EMAIL,
        subject: 'New report has been sent from your website',
        html: mailerConfig_1.mailGenerator.generate(mail)
    };
    try {
        yield mailerConfig_1.default.sendMail(messageForMail);
        (0, ipController_1.deleteAllIp)();
        console.log('email sent successfully');
    }
    catch (err) {
        console.error('Error while sending email:', err);
    }
});
exports.sendReport = sendReport;
