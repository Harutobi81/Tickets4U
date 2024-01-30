import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

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


  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
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

      lastName: new FormControl(
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

      confirmPassword: new FormControl(
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

  register(register_data: any) {
    console.log(register_data);
  }

}
