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
const promise_1 = __importDefault(require("mysql2/promise"));
//Configuracion de la database
const config = {
    host: "sql10.freesqldatabase.com",
    user: "sql10776764",
    password: "6vwAtsIbeR",
    database: "sql10776764",
    connectionLimit: 10,
    //Espera en la conexion
    waitForConnections: true,
    //Tiempo de Espera
    queueLimit: 0,
};
const pool = promise_1.default.createPool(config);
class Database {
    query(sql_1) {
        return __awaiter(this, arguments, void 0, function* (sql, values = null) {
            const cn = yield pool.getConnection();
            try {
                const [result] = yield cn.query(sql, values);
                return result;
            }
            finally {
                cn.release();
            }
        });
    }
}
exports.default = new Database();
