import { Component, OnInit } from '@angular/core';
import { ServidorGiphyService } from '../servidor-giphy.service';

@Component({
  selector: 'app-gifs-seccion',
  templateUrl: './gifs-seccion.component.html',
  styleUrls: ['./gifs-seccion.component.css']
})
export class GifsSeccionComponent implements OnInit {
  gifsModa:any[]=[]

  constructor(private servicioGifs:ServidorGiphyService) { }
  

  ngOnInit(): void {
    this.servicioGifs.gifsApi().subscribe((response: any) => {
      this.gifsModa = response.data
    })
  }

}
