import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroesComponent} from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { PageComponent } from './page.component';
import {AppComponent} from "./app.component";
import { HeroService } from './hero.service';
import { PageService } from './page.service';
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from "@angular/http";


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HeroService, PageService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
