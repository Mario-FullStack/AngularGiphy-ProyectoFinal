import { Component, OnInit } from '@angular/core';
import { ServidorGiphyService } from '../servidor-giphy.service';

@Component({
  selector: 'app-stiker-seccion',
  templateUrl: './stiker-seccion.component.html',
  styleUrls: ['./stiker-seccion.component.css']
})
export class StikerSeccionComponent implements OnInit {
  stiksModa:any[]=[]

  constructor(private servicioStiks:ServidorGiphyService) { }

  ngOnInit(): void {
    this.servicioStiks.stiksApi().subscribe((response: any) => {
      this.stiksModa = response.data
    })
  }

}
