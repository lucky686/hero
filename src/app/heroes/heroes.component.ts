import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import {HeroserviceService} from '../heroservice.service';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroform: FormGroup;
hero: Hero;
invalidCredentialMsg: string;
  constructor(private heroservice: HeroserviceService, private router: Router) { }

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
      // tslint:disable-next-line: triple-equals
      if (hero.heroname == 'chiru') {
        sessionStorage.setItem('admin', JSON.stringify(hero));
      }
      console.log(hero);
    });
}
// onFormSubmit() {
//   const hid = this.heroform.get('heroid').value;
//   const hname = this.heroform.get('heroname').value;
// }
}
