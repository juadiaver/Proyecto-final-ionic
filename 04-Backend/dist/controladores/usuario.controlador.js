"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_modelo_1 = require("../modelos/usuario.modelo");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Token_1 = require("../clases/Token");
class usuarioController {
    crearUsuario(req, res) {
        let u = new usuario_modelo_1.Usuario();
        u.usuario = req.body.nombre + '' + req.body.apellidos;
        u.email = req.body.email;
        let pwdPlana = req.body.pwd;
        const hash = bcrypt_1.default.hashSync(pwdPlana, 10);
        u.pwd = hash;
        u.role = ['01'];
        usuario_modelo_1.Usuario.create(u, (err, usuarioDB) => {
            if (err) {
                console.log(err);
                throw err;
            }
            else {
                return res.status(200).json({
                    status: "ok",
                    message: "el usuario creado es " + usuarioDB.usuario,
                });
            }
        });
    }
    login(req, res) {
        console.log(req.body);
        let usuario = req.body.usuario;
        let pwd = req.body.pwd;
        usuario_modelo_1.Usuario.findOne({ usuario: usuario }, null, null, (err, usuarioDB) => {
            if (err) {
                throw err;
            }
            if (usuarioDB) {
                if (bcrypt_1.default.compareSync(pwd, usuarioDB.pwd)) {
                    const usuarioQueMando = new usuario_modelo_1.Usuario();
                    usuarioQueMando._id = usuarioDB._id;
                    usuarioQueMando.usuario = usuarioDB.usuario;
                    usuarioQueMando.usuario = usuarioDB.usuario;
                    return res.status(200).json({
                        status: "ok",
                        message: "el usuario es " + usuario + " y la contraseña es correcta",
                        _id: usuarioDB._id,
                        token: Token_1.Token.generarToken(usuarioQueMando),
                    });
                }
                else {
                    return res.status(200).json({
                        status: "ok",
                        message: "la contraseña no es correcta"
                    });
                }
            }
            else {
                return res.status(200).json({
                    status: "fail",
                    message: "no hay usuario"
                });
            }
        });
    }
    ;
    renuevaToken(req, res) {
        let usuarioToken = req.body.usuarioToken;
        const usuarioQueMando = new usuario_modelo_1.Usuario();
        usuarioQueMando._id = usuarioToken._id;
        usuarioQueMando.usuario = usuarioToken.usuario;
        usuarioQueMando.usuario = usuarioToken.usuario;
        return res.status(200).json({
            status: "ok",
            message: "Token renovado",
            _id: usuarioToken._id,
            token: Token_1.Token.generarToken(usuarioQueMando),
        });
    }
}
exports.default = usuarioController;
