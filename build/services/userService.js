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
const database_1 = __importDefault(require("../database/database"));
class userService {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query("SELECT * FROM users");
            return users;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query("SELECT * FROM users WHERE id = ?", id);
            if (Array.isArray(user) && user.length > 0) {
                return user[0];
            }
            return null;
        });
    }
    postUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            const result = yield database_1.default.query("INSERT INTO users (name,surname1,surname2) VALUES (?,?,?)", [data.name, data.surname1, data.surname2]);
            if (result.insertId) {
                return yield this.getUser(result.insertId);
            }
            return null;
        });
    }
}
exports.default = new userService();
