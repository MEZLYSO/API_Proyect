"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSucess = sendSucess;
exports.sendError = sendError;
function sendSucess(res, data) {
    return res.status(200).json({
        status: "success",
        data,
    });
}
function sendError(res, message = "Internal error", statusCode = 500) {
    res.status(statusCode).json({
        success: false,
        data: null,
        error: message,
    });
}
