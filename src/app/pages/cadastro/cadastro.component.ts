import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { regexSenha } from 'src/app/utils/constantes';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  //variaveis
  titularForm: FormGroup;


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ){
    this.titularForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      dataNasc: ['',[Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      email: ['',[Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.pattern(regexSenha)]],
      confSenha: ['', [Validators.required, Validators.pattern(regexSenha)]]
    })
  }

}
