import { Component, VERSION } from '@angular/core';
import { PrenotazioneService } from './prenotazione.service';

export class postiTeatro {
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
  posti: Array<string> = ['Torino','Milano','Genova'];
  constructor(private ows: PrenotazioneService) { }
  refreshTemperature(itemName: string) {
    this.selezione = new postiTeatro(itemName, undefined);
    this.ows.getData(this.selezione.nome).subscribe({
      next: ( x: any ) => this.selezione.valore = x.main.temp,
      error: err => console.error('Observer got an error: ' + err)
    });

  }
}
