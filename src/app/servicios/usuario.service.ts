import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Usuario} from '../Data/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public UsuarioLogeado: Usuario[];
  constructor(private router: Router) { }

  setUsuarioLogeadoen(usuario: Usuario[]): void {
    this.UsuarioLogeado = usuario;
    localStorage.setItem('usuFerr', JSON.stringify(usuario));

  }
  getUsuarioLogeadoen() {
    return JSON.parse(localStorage.getItem('usuFerr'));
  }

  logout(): void {
    this.EliminarLogin();
    this.router.navigate(['login']);
  }

  private EliminarLogin() {
    localStorage.removeItem('usuFerr');
    this.UsuarioLogeado = null;
  }
}
