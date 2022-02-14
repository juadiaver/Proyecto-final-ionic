import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _usuarioService:UsuarioService) { }
  public usuario = {
    usuario:'',
    pwd:''
  }
  ngOnInit() {
  }

  async login(){
    const respuesta = await this._usuarioService.login(this.usuario);
    if (respuesta.status=='ok') {
      console.log('usuario logado')
      this
    } else {
      console.log(respuesta.message)
    }
  }
  
  esValido(){
    return true;
  }
}
