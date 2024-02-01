import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController  } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  validation_messages = {
    name: [
      { type:'required', message: 'El nombre es obligatorio.' },
      { type: 'pattern', message: 'El nombre ingresado no es valido.' }
    ],

    last_name: [
      { type:'required', message: 'El apellido es obligatorio.' },
      { type: 'pattern', message: 'El apellido ingresado no es valido.' }
    ],

    email: [
      { type:'required', message: 'El email es obligatorio.' },
      { type: 'pattern', message: 'El email ingresado no es valido.' }
    ],

    password: [
      { type:'required', message: 'La contraseña es obligatoria.' },
      { type: 'pattern', message: 'La contraseña ingresada no es valida.' }
    ],

    password_confirmation: [
      { type:'required', message: 'La confirmación de la contraseña es obligatoria.' },
      { type: 'pattern', message: 'La confirmación de la contraseña ingresada no es valida.' }
    ]
    
  }

  registerMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z]+"
          )
        ])
      ),

      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z]+"
          )
        ])
      ),

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
      ),

      password_confirmation: new FormControl(
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

  async register(register_data: any){
    if (register_data.password !== register_data.password_confirmation) {
      
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK']
      });

      await alert.present();

      return;

    }

    this.authService.registerUser(register_data).then(res => {
      this.registerMessage = res;
      this.navCtrl.navigateForward('/login');
    }).catch(err => {
      this.registerMessage = err;
    });

    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Usuario registrado correctamente',
      buttons: ['OK']
    });

    await alert.present();
  }

  goToLogin(){
    this.navCtrl.navigateBack('/login');
  }

}