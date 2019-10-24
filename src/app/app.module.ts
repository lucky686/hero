import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { HeroserviceService} from './heroservice.service';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { AddadminComponent } from './admin/addadmin/addadmin.component';
import { EditadminComponent } from './admin/editadmin/editadmin.component';
import { AuthGuardService } from './guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HerodetailComponent,
    TemplateComponent,
    AdminComponent,
    AddadminComponent,
    EditadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HeroserviceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
