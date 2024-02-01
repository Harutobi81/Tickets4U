import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  async canActivate() {
    const userLoggedIn = await this.storage.get('userLoggedIn');
    if (userLoggedIn) {
      console.log('El usuario está logueado.');
      return true;
    } else {
      console.log('El usuario no está logueado.');
      this.router.navigateByUrl('/login');
      return false;
    }

  }
}
