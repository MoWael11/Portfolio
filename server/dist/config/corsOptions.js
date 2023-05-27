"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const allowedOrigins_1 = require("./allowedOrigins");
const logger_1 = require("../middleware/logger");
exports.default = {
    origin: (origin, callback) => {
        try {
            if (allowedOrigins_1.allowedOrigins.indexOf(origin) !== -1) { // remeber to delete !origin when deploying
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        }
        catch (err) {
            (0, logger_1.logEvents)(`${err.name}: ${err.message}`, 'errLog.txt');
        }
    },
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
