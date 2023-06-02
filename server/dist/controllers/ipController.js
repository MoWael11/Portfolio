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
exports.deleteAllIp = exports.addIp = exports.getAllIp = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const Ip_1 = __importDefault(require("../models/Ip"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const getAllIp = () => __awaiter(void 0, void 0, void 0, function* () {
    const allIp = yield Ip_1.default.find().select(' -_id -__v').lean();
    return allIp;
});
exports.getAllIp = getAllIp;
exports.addIp = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ipAddress = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    console.log(ipAddress);
    const dublicate = yield Ip_1.default.findOne({ ipAddress }).lean().exec(); // to give just json with lean
    if (dublicate) {
        console.log("'it's dupplicated");
        return res.status(409).json('duplicate IPAddress');
    }
    const geo = geoip_lite_1.default.lookup(ipAddress);
    const ipObject = { ipAddress, city: geo ? geo.city ? geo.city : ' - ' : ' - ', country: geo ? geo.country ? geo.country : ' - ' : ' - ' };
    console.log("new ip added " + ipObject);
    const ip = yield Ip_1.default.create(ipObject);
    if (ip) {
        res.status(201).json({ message: `New IP ${ipAddress} added` });
    }
    else {
        res.status(400).json({ message: 'Invalid ip data received' });
    }
}));
const deleteAllIp = () => __awaiter(void 0, void 0, void 0, function* () {
    yield Ip_1.default.deleteMany({}).lean();
});
exports.deleteAllIp = deleteAllIp;
