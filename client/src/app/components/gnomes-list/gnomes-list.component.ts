import { Component, OnInit } from '@angular/core';
import { GnomesServices } from '../services/GnomesServices';

import { Gnome } from '../models/gnomes';

@Component({
  selector: 'app-gnomes-list',
  templateUrl: './gnomes-list.component.html',
  styleUrls: ['./gnomes-list.component.css']
})
export class GnomesListComponent implements OnInit {


  gnomes: any = [];

  constructor() { }



  ngOnInit() {
  	this.getGenomes();
  }

  getGnomes() {

  }
  deleteGnomes(){
  	
  }

}
