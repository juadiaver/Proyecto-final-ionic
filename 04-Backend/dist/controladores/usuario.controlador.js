"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class usuarioController {
    getDatos(req, res) {
        console.log(req.query);
        let usuario = req.query.usuario;
        if (usuario) {
            return res.status(200).json({
                status: "ok",
                message: "el objeto es " + usuario
            });
        }
        else {
            return res.status(500).json({
                status: "fail",
                message: "no hay usuario"
            });
        }
    }
    ;
    login(req, res) {
        console.log(req.body);
        let usuario = req.body.usuario;
        let pwd = req.body.pwd;
        if (usuario) {
            return res.status(200).json({
                status: "ok",
                message: "el usuario es " + usuario + " y la contraseña: " + pwd
            });
        }
        else {
            return res.status(200).json({
                status: "fail",
                message: "no hay usuarios"
            });
        }
    }
    ;
}
exports.default = usuarioController;
