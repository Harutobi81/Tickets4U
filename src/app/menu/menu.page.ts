import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  closeMenu(){
    console.log("Cerrar menu")
    this.menu.close();
  }

  logout(){
    console.log("Cerrar sesion")
    this.navCtrl.navigateRoot('/login');
  }

  goToIntro(){
    console.log("go to intro")
    this.navCtrl.navigateBack('/intro');
  }

}