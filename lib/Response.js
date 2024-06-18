"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
class APIError extends Error {
    constructor(message, statusCode, headers, errorData) {
        super(message);
        this.name = "APIError";
        this.status = statusCode;
        this.headers = headers;
        this.errorData = errorData;
    }
}
exports.APIError = APIError;
