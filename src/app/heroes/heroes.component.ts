import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import {HeroserviceService} from '../heroservice.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroform: FormGroup;

  constructor(private heroservice: HeroserviceService) { }

  ngOnInit() {
    this.heroform = new FormGroup({
  heroid : new FormControl(),
 heroname : new FormControl(),
place : new FormControl(),

    });

  }
onsubmit(): void {
  console.log(this.heroform);
  this.heroservice.posthero(this.heroform.value);
}
}
