import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }

  getJoueursData(){
    return this.httpClient.get(this.url + 'joueurs')
  }

  getJoueurData(id:any){
    return this.httpClient.get(this.url + 'joueur/' + id)
  }

  createJoueur(data:any){
    return this.httpClient.get(this.url + 'joueur/create?' + data)
  }

  editJoueur(id:any, data:any){
    return this.httpClient.get(this.url + 'joueur/edit/' + id + "?" + data)
  }

  deleteJoueur(id:any){
    return this.httpClient.get(this.url + 'joueur/delete/' + id)
  }
}
