import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
export class Token {
    private static datos: any = dotenv.config();
    public static claveSecreta: string = Token.datos.parsed.SECRETO;
    public static caducidad: string = '1y';
    constructor() {
    }

    static generarToken(payLoad: any): string {
        return jwt.sign({
            usuario: payLoad
        }, this.claveSecreta, {
            expiresIn: this.caducidad
        })
    }

    static compareToken(token: string) {
        return new Promise<any>((resolve, reject) => {
            jwt.verify(token, this.claveSecreta, (err, decoded) => {
                if (err) {

                    reject('token invalido');
                } else {
                    resolve(decoded);
                }
            })
        })
    }

}