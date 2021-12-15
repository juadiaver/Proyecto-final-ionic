import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'acoso-escolar',
    loadChildren: () => import('./pages/acoso-escolar/acoso-escolar.module').then( m => m.AcosoEscolarPageModule)
  },  {
    path: 'cyber-bulling',
    loadChildren: () => import('./pages/cyber-bulling/cyber-bulling.module').then( m => m.CyberBullingPageModule)
  },
  {
    path: 'pide-ayuda',
    loadChildren: () => import('./pages/pide-ayuda/pide-ayuda.module').then( m => m.PideAyudaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'contrasena-olvidada',
    loadChildren: () => import('./pages/contrasena-olvidada/contrasena-olvidada.module').then( m => m.ContrasenaOlvidadaPageModule)
  },


  
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
