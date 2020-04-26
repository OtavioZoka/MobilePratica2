import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Input() localizacao;
  @Output() enviar = new EventEmitter();
  @Input() nome;

  enivarEndereco(local, cidade, pais) {
    this.enviar.emit({ name: this.nome, location: { address: local, city: cidade, country: pais } });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
