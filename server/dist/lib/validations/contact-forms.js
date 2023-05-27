"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formValidator = void 0;
const zod_1 = require("zod");
exports.formValidator = zod_1.z.object({
    name: zod_1.z.string().nonempty(),
    email: zod_1.z.string().nonempty().email(),
    phone: zod_1.z.string().optional(),
    message: zod_1.z.string().nonempty().min(10, "")
});
