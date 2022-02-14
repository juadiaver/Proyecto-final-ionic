import { Request, Response } from "express";
import { Usuario } from "../modelos/usuario.modelo";
import bcrypt from 'bcrypt';
import { Token } from "../clases/Token";

class usuarioController {

    crearUsuario(req: Request, res: Response) {

        let u = new Usuario();
        u.usuario = req.body.nombre + '' + req.body.apellidos;
        u.email = req.body.email;

        let pwdPlana = req.body.pwd;
        const hash = bcrypt.hashSync(pwdPlana, 10);

        u.pwd = hash;
        u.role = ['01'];


        Usuario.create(u, (err, usuarioDB) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                return res.status(200).json({
                    status: "ok",
                    message: "el usuario creado es " + usuarioDB.usuario,

                })
            }

        })


    }

    login(req: Request, res: Response) {

        console.log(req.body);
        let usuario = req.body.usuario;
        let pwd = req.body.pwd;

        Usuario.findOne({ usuario: usuario }, null, null, (err, usuarioDB) => {
            if (err) {
                throw err;
            }
            if (usuarioDB) {
                if (bcrypt.compareSync(pwd, usuarioDB.pwd)) {
                    const usuarioQueMando = new Usuario();
                    usuarioQueMando._id = usuarioDB._id;
                    usuarioQueMando.usuario = usuarioDB.usuario;
                    usuarioQueMando.usuario = usuarioDB.usuario;

                    return res.status(200).json({
                        status: "ok",
                        message: "el usuario es " + usuario + " y la contraseña es correcta",
                        _id: usuarioDB._id,
                        token: Token.generarToken(usuarioQueMando),
                    });
                } else {
                    return res.status(200).json({
                        status: "ok",
                        message: "la contraseña no es correcta"
                    });
                }

            } else {
                return res.status(200).json({
                    status: "fail",
                    message: "no hay usuario"
                });

            }
        })
    };

    renuevaToken(req: Request, res: Response) {

        let usuarioToken = req.body.usuarioToken;
        const usuarioQueMando = new Usuario();
        usuarioQueMando._id = usuarioToken._id;
        usuarioQueMando.usuario = usuarioToken.usuario;
        usuarioQueMando.usuario = usuarioToken.usuario;

        return res.status(200).json({
            status: "ok",
            message: "Token renovado",
            _id: usuarioToken._id,
            token: Token.generarToken(usuarioQueMando),

        });
    }
}


export default usuarioController;