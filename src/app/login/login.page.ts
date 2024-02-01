import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  
  loginForm: FormGroup;

  validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'pattern', message: 'El email ingresado no es valido.' }
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria.' },
      { type: 'pattern', message: 'La contraseña ingresada no es valida.' }
    ]
  }

  loginMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),

      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$"
          )
        ])
      )

    })
  }

  ngOnInit() {
  }

  login(login_data: any) {
    console.log(login_data);
    this.authService.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn', true);
      this.navCtrl.navigateForward('menu/home');
    }).catch(err => {
      this.loginMessage = err;
    });
  }

}
