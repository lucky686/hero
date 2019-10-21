import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroserviceService {

  private heroesurl = 'https://localhost:44302/api/Heroesapi';

private redirectUrl = '/';

private isloggedIn = false;
  constructor(private http: HttpClient) { }
  // const url1 = '${this.heroesurl}/${id}';
  // new httpclient automatically coverts json data so no need to use map method
  getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesurl);
  }
  getHero(id: number): Observable<Hero> {
    // const url = '${this.heroesurl + "/"+id}';
    const url = this.heroesurl + '/' + id;
    return this.http.get<Hero>(url);

  }
  deletehero(id: number): Observable<Hero> {
    const url = '${this.heroesurl + "/"+id}';
    // const url = this.heroesurl;
    return this.http.get<Hero>(url);

  }
  posthero(hero: any): Observable<Hero> {
    const url = this.heroesurl;
    return this.http.post<Hero>(url, hero);

  }
  // isUserAuthenticated(heroid: number, heroname: string): Observable<boolean> {
  //   return this.getHeroes().map(heroes => let hero = Hero.find(Hero => (Hero.heroid === heroid) && (Hero.heroname === heroname)));
  // }

  getRedirectUrl(): string {
    return this.redirectUrl;
}
}
