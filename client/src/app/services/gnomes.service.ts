import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gnomes } from '../models/gnomes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GnomesService {
  
  API_URI =  'http://localhost:3000/api';

  gnome: Gnomes = {
    name: '',
    thumbnail: '',
    age:'',
    weight: '',
    height: '',
    hair_color: '',
    professions: '',
    friends:'',
    created_at: new Date()
};
   
  constructor(private http: HttpClient) { }
  
  getGnomes() {
  
    return this.http.get(`${this.API_URI}/gnomes`);
  }

  getGnome(id: string) {
    return this.http.get(`${this.API_URI}/gnomes/${id}`);
  }

  deleteGnomes(id: string) {
    return this.http.delete(`${this.API_URI}/gnomes/${id}`);
  }

  saveGnome(gnome: Gnomes) {
    return this.http.post(`${this.API_URI}/gnomes`, gnome);
  }

 updateGnome(id: string|number, updatedGnome: Gnomes) { 
   return this.http.put(`${this.API_URI}/gnomes/${id}`, updatedGnome);
  }

}
