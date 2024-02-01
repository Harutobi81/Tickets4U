import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
  ) { }

  loginUser(credential: any) {
    return new Promise((accept, reject) => {
      if (
        credential.email == 'harold@gmail.com'
        && credential.password == 'H4r0ld@81'
      ) {
        console.log('Login successful');
        accept('Login successful');
      } else {
        reject('Login failed');
      }

    });
  }

  registerUser(registerData: any) {

    return new Promise((accept, reject) => {  
      if (registerData.password == registerData.password_confirmation) {
        accept('User registered successfully!');
      } else {
        reject('Error registering user');
      }
    });
  
  }
}


