"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const root_1 = __importDefault(require("./routes/root"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const ipRoutes_1 = __importDefault(require("./routes/ipRoutes"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("./middleware/logger");
const errorHandler_1 = require("./middleware/errorHandler");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const corsOptions_1 = __importDefault(require("./config/corsOptions"));
const dbConn_1 = __importDefault(require("./config/dbConn"));
const mongoose_1 = __importDefault(require("mongoose"));
const report_1 = __importDefault(require("./config/report"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
(0, dotenv_1.config)();
console.log(process.env.NODE_ENV);
(0, dbConn_1.default)();
(0, report_1.default)();
// to truest proxy so it able to identify the client's IP address
app.set('trust proxy', true);
app.use(logger_1.logger);
app.use((0, cors_1.default)(corsOptions_1.default));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// serve the static files from the public directory
app.use('/', express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
app.use('/', root_1.default);
app.use('/auth', authRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.use('/contact', contactRoutes_1.default);
app.use('/ip', ipRoutes_1.default);
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) { // header of a http request is text/html
        res.sendFile(path_1.default.join(__dirname, '..', 'views', '404.html'));
    }
    else if (req.accepts('json')) {
        res.json({ error: '404 Not Found' });
    }
    else {
        res.type('txt').send('404 Not Found');
    }
});
app.use(errorHandler_1.errorHandler);
mongoose_1.default.connection.once('open', () => {
    console.log('connected to MongoDB');
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
mongoose_1.default.connection.on('error', err => {
    console.log(err);
    (0, logger_1.logEvents)(`${err.name}: ${err.message}\t${err.syscall}\t${err.hostname}`, 'mongoErr.log');
});
