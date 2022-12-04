import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  //pensamento - atributo
  //@Input - decorator
  @Input() pensamento = {
    conteudo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor totam dolorum facilis nulla dolore exercitationem officiis fugit voluptatem, commodi consequatur cupiditate nemo iusto nostrum adipisci placeat voluptate consectetur? Distinctio, pariatur?',
    autoria: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor totam dolorum facilis nulla dolore exercitationem officiis fugit voluptatem, commodi consequatur cupiditate nemo iusto nostrum adipisci placeat voluptate consectetur? Distinctio, pariatur?',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
