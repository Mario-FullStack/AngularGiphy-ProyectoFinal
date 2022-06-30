import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-principal',
  templateUrl: './inicio-principal.component.html',
  styleUrls: ['./inicio-principal.component.css']
})
export class InicioPrincipalComponent implements OnInit {
  activoI:boolean = false;
  activoG:boolean = false;
  activoS:boolean = false;

  cambiarClaseIni(){
    this.activoI = !this.activoI;
    this.activoI = true;
    this.activoG = false;
    this.activoS = false;
  }
  cambiarClaseGif(){
    this.activoG = !this.activoG;
    this.activoG = true;
    this.activoI = false;
    this.activoS = false;
  }
  cambiarClaseStik(){
    this.activoS = !this.activoS;
    this.activoS = true;
    this.activoG = false;
    this.activoI = false;
  }

  constructor() {}

  ngOnInit(): void {
    this.activoI = true
  }

}
