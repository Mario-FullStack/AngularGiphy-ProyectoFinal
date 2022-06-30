import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServidorGiphyService {

  constructor(private http:HttpClient) { }

  gifsApi() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)
  }

  stiksApi() {
    return this.http.get(`https://api.giphy.com/v1/stickers/trending?api_key=${environment.giphyApiKey}&limit=50`)
  }
}
