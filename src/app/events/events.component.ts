import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  recebervalor(localizacao) {
    for (let var1 of this.evento) {
      if (localizacao.name === var1.name) {
        var1.location = localizacao.location
      }
    }

  }

  eventos = [
    { name: 'Villa Mix', date: '9/26/2020', time: '10am', location: { address: 'Mineirão ', city: 'Belo Horizonte', country: 'Brasil' } }
  ];
  evento = [
    { name: 'Villa Mix', date: '9/26/2020', time: '10am', location: { address: 'Mineirão ', city: 'Belo Horizonte', country: 'Brasil' } },
    { name: 'Rock In Rio', date: '4/15/2020', time: '9am', onlineUrl: 'https://www.rockinrio.com.br/' },
    { name: 'Campus Party', date: '6/10/2020', time: '8am' },
    { name: 'Loolapalooza', date: '4/15/2020', time: '9am', onlineUrl: 'http://www.loolapalooza.com' },
    { name: 'Samba Prime', date: '6/10/2020', time: '8am', location: { address: 'Expominas', city: 'Belo Horizonte', country: 'Brasil' }, onlineUrl: 'http://www.sambaprime.com.br' }
  ];
  constructor() { }



  ngOnInit(): void {
  }


}
