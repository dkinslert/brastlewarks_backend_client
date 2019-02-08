import { Component, OnInit } from '@angular/core';
import { Gnomes } from '../models/gnomes';
import { GnomesService } from '../services/ganomes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gnomes-form',
  templateUrl: './gnomes-form.component.html',
  styleUrls: ['./gnomes-form.component.css']
})
export class GnomesFormComponent implements OnInit {

  constructor(private gnomesService: GnomesService) { }
  @HostBinding('class') clases = 'row';

  gnome: Gnome = {
    name: '',
    thumbnail: '',
    age:'',
    weight: '',
    height: '',
    hair_color: '',
    professions: '',
    friends:''
    created_at: new Date()
};
  ngOnInit() {
  	const params = this.ActivatedRoute.snapsho
  	 if (params.id) {
      this.gnomesService.getGnome(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

  }

  saveNewGnome() {
    delete this.gnome.created_at;
    delete this.gnome.id;
    this.gnomesService.saveGnome(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/gnomes']);
        },
        err => console.error(err)
      )
  }

  updateGnome() {
    delete this.gnome.created_at;
    this.gnomesService.updateGnome(this.gnome.id, this.gnome)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/gnomes']);
        },
        err => console.error(err)
      )
  }


}
