import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  //Atribulo - listaPensamento
  listaPensamentos = [
    {
      conteudo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor totam dolorum facilis nulla dolore exercitationem officiis fugit voluptatem, commodi consequatur cupiditate nemo iusto nostrum adipisci placeat voluptate consectetur? Distinctio, pariatur? Distinctio, pariatur?',
      autoria: 'Mateus',
      modelo: 'modelo3',
    },
    {
      conteudo:
        'Ser ou não ser',
      autoria: 'Mateus',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

