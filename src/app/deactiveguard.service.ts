import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DeactiveguardService {

  constructor(private router: Router) { }
  canDeactivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // tslint:disable-next-line: triple-equals
      if (sessionStorage.getItem('admin') != null) {
        return true;
      }
      this.router.navigate(['heroes']);
      return false;
    }
}

