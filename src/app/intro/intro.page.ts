import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "¡Bienvenido a Tickets4U!",
      description: "",
      image: "assets/images/logo.png",
      class: "slide-1",
    },
    {
      title: "Toda clade de eventos",
      description: "",
      image: "assets/images/img1.jpg",
      class: ""
    },
    {
      title: "Apoya a tu equipo favorito.",
      description: "",
      image: "assets/images/slide3.jpg",
      class: "slide-3"
    },
    {
      title: "Disfruta de tu banda favorita",
      description: "",
      image: "assets/images/slide4.jpg",
      class: "slide-4"
    },
    {
      title: "Aprovecha",
      description: "",
      image: "assets/images/slide5.gif",
      class: "slide-5"
    }
  ]

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  goToHome() {
    console.log("Volví a Home")
    this.router.navigateByUrl('menu/home')
  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    this.storage.set('mostreLaIntro', true)
    console.log("Ya vi la intro")
    
  }
}
