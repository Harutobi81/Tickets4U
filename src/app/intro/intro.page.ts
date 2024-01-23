import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "¡Bienvenido a Tickets4U!",
      description: "En <b>Tickets4U</b> encontrarás una amplia variedad de eventos para todos los gustos y presupuestos. Desde conciertos de tus artistas favoritos hasta partidos de fútbol de tu equipo favorito.",
      image: "assets/images/intro.gif",
      help_text: "Swipe para continuar",
      class: "slide-1",
    },
    {
      title: "Toda clade de eventos",
      description: "Comprar entradas en Tickets4U es rápido y sencillo solo tienes que buscar el evento que te interesa, seleccionar las entradas que quieres y realizar el pago. ¡En unos pocos clics tendrás tus entradas en tu mano!",
      image: "assets/images/intro1.gif",
      help_text: "Swipe para continuar",
      class: ""
    },
    {
      title: "Apoya a tu equipo favorito en tu deporte favorito",
      description: "En Tickets4U siempre encontrarás las mejores ofertas exclusivas, descuentos y promociones para que disfrutes de tus eventos al mejor precio.",
      image: "assets/images/slide3.jpg",
      help_text: "Swipe para continuar",
      class: "slide-3"
    },
    {
      title: "Disfruta de tu banda favorita",
      description: "Nunca fue tan fácil acompañar a tu grupo favorito. Aquí en Tickets4U te brindamos la mejor experiencia de compra. Así que no lo pienses más y disfurta, la vida es una sola.",
      image: "assets/images/slide4.jpg",
      help_text: "Swipe para continuar",
      class: "slide-4"
    },
    {
      title: "No lo pienses más",
      description: "Esperamos y puedas disfrutar de una gran experiencia en nuestra App y puedas satisfacer ese gusto por la diversión. Apresurate a comprar tu entrada a tu evento favorito.",
      image: "assets/images/slide5.png",
      help_text: "Swipe para continuar",
      class: "slide-5"
    }
  ]
  
  constructor(
    private router: Router
  ) { }

  goToHome() {
    this.router.navigateByUrl('/home')
  }
  ngOnInit() {
  }

}
