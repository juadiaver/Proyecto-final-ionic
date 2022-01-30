import bodyParser from "body-parser";
import cors from "cors";
import { Server } from "./clases/Server";
import usuarioRutas from "./rutas/usuario.rutas";


const servidor = new Server();

servidor.app.use(bodyParser.urlencoded({limit:'5mb', extended:true}));
servidor.app.use(bodyParser.json({limit:'5mb'}));
servidor.app.use(cors( {
    origin:true,
    credentials:true
}));

servidor.app.use('/usuario', usuarioRutas);



servidor.star(()=>{
    console.log('servidor iniciado en el puerto '+servidor.port);
})