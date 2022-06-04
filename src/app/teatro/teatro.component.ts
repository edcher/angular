import { Component, Input, OnInit } from '@angular/core';
import { postiTeatro } from '../app.component'

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.css']
})
export class TeatroComponent implements OnInit {
  @Input() selezione: postiTeatro;
  constructor() { }
  clean() {
    this.selezione = undefined;
  }
  ngOnInit() {
  }
}