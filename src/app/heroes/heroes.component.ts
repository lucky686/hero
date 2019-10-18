import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import {HeroserviceService} from '../heroservice.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroform: FormGroup;
hero: Hero;
  constructor(private heroservice: HeroserviceService) { }

  ngOnInit() {
    this.heroform = new FormGroup({
  heroid : new FormControl(),
 heroname : new FormControl(),
place : new FormControl(),

    });

  }
onsubmit(hero: Hero): void {
  // tslint:disable-next-line: no-shadowed-variable
  this.heroservice.posthero(hero).subscribe(hero => {
      this.hero = hero;
      console.log(hero);
  });
}
}
