import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario ={
    nombre:'',
    apellidos:'',
    pwd:'',
    email:'',
  }

  public pwd2 = '';
  constructor( private _usuarioService:UsuarioService, private _router:Router) { }

  ngOnInit() {
  }

  async register(){
    const respuesta = await this._usuarioService.crearUsuario(this.usuario);
    console.log(respuesta);
    if(respuesta.status='ok'){
      this._router.navigate(['login'])
    }else{
      this._router.navigate(['inicio'])
    }
  }

  esValido():boolean{
    return true;
  }

}
