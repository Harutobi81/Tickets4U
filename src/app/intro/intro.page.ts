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
      title: "",
      description: "",
      image: "assets/images/intro1.gif",
      class: "slide-0",
    },
    {
      title: "¡Bienvenido a Tickets4U!",
      description: "Tu destino para descubrir y disfrutar de eventos locales, nacionales e internacionales. Sumérgete en una experiencia única.",
      image: "assets/images/slide1.jpg",
      class: "slide-1",
    },
    {
      title: "Explora un mundo de eventos.",
      description: "Con <strong>Tickets4U</strong> disfrura desde conciertos locales hasta eventos internacionales. Compra de forma rápida y segura pagando por PSE, tarjeta de crédito o en afiliados.",
      image: "assets/images/slide2.jpg",
      class: ""
    },
    {
      title: "Gana con Tickets4U",
      description: "Cada compra para eventos, te acerca a increíbles premios y beneficios. Acumula puntos que podrás canjear por experiencias únicas. ¡Tu lealtad tiene recompensa!",
      image: "assets/images/slide3.jpg",
      class: "slide-3"
    },
    {
      title: "Descuentos Especiales y Eventos Exclusivos",
      description: "En <strong>Tickets4U</strong>, te consentimos con descuentos especiales y acceso a eventos exclusivos. ¿Estás listo para vivir momentos inolvidables?",
      image: "assets/images/slide4.jpg",
      class: "slide-5"
    },
    {
      title: "Disfruta de la Experiencia Tickets4U",
      description: "Sumérgete en un viaje único de entretenimiento. A disfrutar <strong>Tickets4U</strong>!",
      image: "assets/images/slide5.jpg",
      class: "slide-4"
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
