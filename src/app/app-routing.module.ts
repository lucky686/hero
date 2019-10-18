import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { TemplateComponent } from './template/template.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  {  path: 'detail/:id', component: HerodetailComponent },
  {  path: 'template', component: TemplateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
