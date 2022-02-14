"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Token {
    constructor() {
    }
    static generarToken(payLoad) {
        return jsonwebtoken_1.default.sign({
            usuario: payLoad
        }, this.claveSecreta, {
            expiresIn: this.caducidad
        });
    }
    static compareToken(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this.claveSecreta, (err, decoded) => {
                if (err) {
                    reject('token invalido');
                }
                else {
                    resolve(decoded);
                }
            });
        });
    }
}
exports.Token = Token;
Token.datos = dotenv_1.default.config();
Token.claveSecreta = Token.datos.parsed.SECRETO;
Token.caducidad = '1y';
