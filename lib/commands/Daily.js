"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Daily = void 0;
const msgpackr_1 = require("msgpackr");
const Response_1 = require("../Response");
async function Daily(token) {
    const response = await fetch("https://api.purrtun.com/daily", {
        method: "POST",
        headers: {
            "Content-Type": "application/msgpack",
        },
        body: (0, msgpackr_1.pack)({
            "authToken": `${token}`,
        })
    });
    const headers = response.headers;
    const status = response.status;
    if (!response.ok) {
        const error = await response.arrayBuffer();
        const unpacked = await (0, msgpackr_1.unpack)(new Uint8Array(error));
        throw new Response_1.APIError("Daily POST error", status, headers, unpacked);
    }
    const data = await response.arrayBuffer();
    const unpacked = await (0, msgpackr_1.unpack)(new Uint8Array(data));
    return {
        status,
        headers,
        data: unpacked
    };
}
exports.Daily = Daily;
;
