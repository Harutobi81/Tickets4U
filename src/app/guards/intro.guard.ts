import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  async canActivate() {
    const mostreIntro = await this.storage.get('mostreLaIntro');
    if (mostreIntro) {
      console.log('Ya mostré la intro');
      return true;
    } else {
      console.log('No mostré la intro');
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
}