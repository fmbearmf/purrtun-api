"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
async function encrypt(data) {
    return crypto_js_1.default.DES.encrypt(data.toString(), crypto_js_1.default.enc.Utf8.parse("696c6f7665706f70636174696e76657374696e706f70796f7573686f756c64696e76657374696e706f70"), { mode: crypto_js_1.default.mode.ECB }).toString();
}
exports.encrypt = encrypt;
async function decrypt(data) {
    return crypto_js_1.default.DES.decrypt(data, crypto_js_1.default.enc.Utf8.parse("696c6f7665706f70636174696e76657374696e706f70796f7573686f756c64696e76657374696e706f70"), { mode: crypto_js_1.default.mode.ECB }).toString(crypto_js_1.default.enc.Utf8);
}
exports.decrypt = decrypt;
