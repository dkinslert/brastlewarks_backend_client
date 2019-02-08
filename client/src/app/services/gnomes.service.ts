import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gnomes } from '../models/gnomes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
});
export class GnomesService {
  
  API_URI =  'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { }

  getGnomes() {
    return this.http.get(`${this.API_URI}/gnomes`);
  }

  getGnomes(id: string) {
    return this.http.get(`${this.API_URI}/gnomes/${id}`);
  }

  deleteGnomes(id: string) {
    return this.http.delete(`${this.API_URI}/gnomes/${id}`);
  }

  saveGnome(game: Game) {
    return this.http.post(`${this.API_URI}/gnomes`, gnome);
  }

  updateGnome(id: string|number, updatedGame: Game): Observable<Gnome> {
    return this.http.put(`${this.API_URI}/gnomes/${id}`, updatedGnome);
  }

}
