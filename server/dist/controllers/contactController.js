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
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = void 0;
const contact_forms_1 = require("../lib/validations/contact-forms");
const mailer_1 = require("../lib/mailer");
const submitForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message, phone } = req.body;
    try {
        contact_forms_1.formValidator.parse({ name, email, message, phone });
    }
    catch (error) {
        return res.status(400).json("Invalid form");
    }
    (0, mailer_1.sendContactForm)(res, name, email, message, phone);
});
exports.submitForm = submitForm;
