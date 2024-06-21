import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private authService:AuthService, private cookie:CookieService, private router:Router){}

  ngOnInit(){
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }

  sendLogin(): void{
    const {email,password} = this.formLogin.value;
    this.authService.sendCredentials(email, password)
    .subscribe(responseOK => {
      console.log('Sesion iniciada correcta',responseOK)
      const {tokenSession,data} = responseOK
      this.cookie.set('token', tokenSession, 4, '/')
      this.router.navigate(['/','tracks'])
    },
    error => {
      this.errorSession = true
      console.log('Ocurrio error en email o password')
    })
  }
}
