import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroserviceService} from '../heroservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroserviceService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


// deletehero(): any {
//   this.heroService.deletehero()
//   .subscribe(heroes => this.heroes = heroes);
// }
}
