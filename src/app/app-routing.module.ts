import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { TemplateComponent } from './template/template.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { AddadminComponent } from './admin/addadmin/addadmin.component';
import { EditadminComponent } from './admin/editadmin/editadmin.component';
const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: '', component: AdminComponent, pathMatch: 'full'},
  {  path: 'addadmin', component: AddadminComponent , canActivate: [AuthGuardService]},
    { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  {  path: 'detail/:id', component: HerodetailComponent },
  {  path: 'template', component: TemplateComponent },
  {  path: 'editadmin', component: EditadminComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
