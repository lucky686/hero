import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin/admin';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
admin: Admin;
  constructor( private router: Router ) { }

  ngOnInit() {

  }
  onSubmit(admin: Admin) {
    // tslint:disable-next-line: triple-equals
    console.log(admin);

    if (admin.adminname === 'Lakshmi') {
      sessionStorage.setItem('admin', JSON.stringify(admin));
      // tslint:disable-next-line: no-unused-expression
      // this.router.navigate(['addadmin']);
   }
  }
  logout() {
    sessionStorage.clear();
      }
}
