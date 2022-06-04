import { Component, VERSION } from '@angular/core';

class postiTeatro {
  nome: string;
  valore: string; 
  constructor(nome: string, valore: string) {
    this.nome=nome;
    this.valore=valore;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title: string = 'Prenotazioni spettacoli';
  selezione: postiTeatro;
  posti: Array<postiTeatro> = [
    new postiTeatro('Torino','14'),
    new postiTeatro('Milano','15'),
    new postiTeatro('Genova','18')
  ];
  seleziona(itemName: string) {
    var trovato: Array<postiTeatro> = this.posti.filter(
      el => ( el.nome === itemName )
    );
	  this.selezione = trovato[0];
  }
  clean() {
    this.selezione=undefined;
  }
}
