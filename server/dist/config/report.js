"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const mailer_1 = require("../lib/mailer");
exports.default = () => {
    node_cron_1.default.schedule('*/5 * * * *', () => {
        console.log('running a task every 5 minutes');
        (0, mailer_1.sendReport)();
    }, {
        scheduled: true,
        timezone: 'Europe/Rome'
    });
};
