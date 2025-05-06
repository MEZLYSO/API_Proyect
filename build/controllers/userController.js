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
const userService_1 = __importDefault(require("../services/userService"));
const requestHandlers_1 = require("../utils/requestHandlers");
class userController {
    getUsers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userService_1.default.getUsers();
                (0, requestHandlers_1.sendSucess)(res, users);
            }
            catch (err) {
                (0, requestHandlers_1.sendError)(res, err.message, 500);
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const user = yield userService_1.default.getUser(id);
                if (!user) {
                    (0, requestHandlers_1.sendError)(res, "User not found", 404);
                }
                (0, requestHandlers_1.sendSucess)(res, user);
            }
            catch (err) {
                (0, requestHandlers_1.sendError)(res, err.message);
            }
        });
    }
    insertUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const user = yield userService_1.default.postUser(data);
                if (!user) {
                    (0, requestHandlers_1.sendError)(res, "User not created", 500);
                }
                (0, requestHandlers_1.sendSucess)(res, user);
            }
            catch (err) {
                (0, requestHandlers_1.sendError)(res, err.message);
            }
        });
    }
}
exports.default = new userController();
