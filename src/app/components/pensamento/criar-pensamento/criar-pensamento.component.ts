import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  //Atributo - pensamento
  // {} - objeto
  //id, conteudo, autoria e modelo - propriedades
  pensamento: Pensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor() { /* TODO document why this constructor is empty */  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  criarPensamento(){
    console.log("Event Binding funciona");
  }

  cancelar(){
 //TODO
  }
}
