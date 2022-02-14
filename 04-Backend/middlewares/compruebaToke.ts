import { NextFunction } from "express";
import { Token } from "../clases/Token";
import { Usuario } from "../modelos/usuario.modelo";

export const compruebaToken = (req: any, res: any, next: NextFunction) => {

    let token = req.get('Authorization');
    let userToken = '';
    if (token) {
        userToken = token.split('Bearer ')[1];
        Token.compareToken(userToken).then(async decoded => {

            const idUsuario = decoded.usuario._id;
            const encontrado = await Usuario.findById(idUsuario);
            if (encontrado) {
                req.body.usuarioToken = encontrado;
            } else {
                res.status(200).json({
                    status: 'fail',
                    message: 'Token invalido'
                })
            }
            next();
        }).catch(err => {
            res.status(200).json({
                status: 'fail',
                message: 'Token invalido'
            })
        })
    } else {
        res.status(200).json({
            status: 'fail',
            message: 'No hay token'
        })
    }
}