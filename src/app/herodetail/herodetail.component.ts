import { Component, OnInit, Input } from '@angular/core';
import {HeroserviceService} from '../heroservice.service';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent implements OnInit {
   hero = new Hero();
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroserviceService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
}
