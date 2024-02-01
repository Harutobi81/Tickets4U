import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  event_list: any;
  categories: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
  ) { }

  ionViewDidEnter() {
    this.events.getEvents().then(
      res => {
        this.event_list = res;
        console.log("Eventos desde el servidor", this.event_list);
      }
    )
    console.log("Local Events", this.events.getLocalEvents().events);

    this.events.getCategories().then(
      data => {
        this.categories = data;
        console.log("Categorias desde el servidor", this.categories);
      }
    );

    const categoryId = 1;

    this.events.getCategoryById(categoryId).then(
      category => {
        console.log("Categoría por Id", category);
      }
    );
  }


  goToIntro() {
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
}