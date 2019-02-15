import { Component, OnInit } from '@angular/core';
import { GnomesService } from '../../services/gnomes.service';

import { Gnomes } from '../../models/gnomes';

@Component({
  selector: 'app-gnomes-list',
  templateUrl: './gnomes-list.component.html',
  styleUrls: ['./gnomes-list.component.css']
})
export class GnomesListComponent implements OnInit {

  //noimage: any = '../../assets/noimage.png' ;
  gnomes: any = [];

  constructor(private gnomesServices: GnomesService) { }



  ngOnInit() {
  	this.getGnomes();
  }

  getGnomes() {
  this.gnomesServices.getGnomes()
  .subscribe(
    
    res =>
     {
       //this.noimage = this.noimage
        this.gnomes = res 
    },
     
     err => console.error(err)

     
  )
  }
  deleteGnomes(id: string){
    this.gnomesServices.deleteGnomes(id)
    .subscribe(
      res => {
        console.log(res);
        this.getGnomes;
      },
      err => console.error(err)
    )
  }

}
