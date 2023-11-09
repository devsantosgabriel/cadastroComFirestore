import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public cadastroService: CadastroService) { }

  ngOnInit() {
  }

  adicionaUsuario() {
    const nome = document.getElementById('nome') as HTMLInputElement
    const email = document.getElementById('email') as HTMLInputElement
    const senha = document.getElementById('senha') as HTMLInputElement

    let capturaNome = nome.value
    let capturaEmail = email.value
    let capturaSenha = senha.value

    this.cadastroService.inserirUsuario(capturaNome, capturaEmail, capturaSenha)
    console.log(this.cadastroService.getUsuario())
  } 

}

