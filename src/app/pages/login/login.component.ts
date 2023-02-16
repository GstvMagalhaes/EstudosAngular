import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexEmail, regexSenha } from 'src/app/utils/constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ){
    this.loginForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern(regexEmail)]],
      senha: ['', [Validators.required, Validators.pattern(regexSenha)]],
    })
  }
 

}
