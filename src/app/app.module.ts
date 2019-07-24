import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { NonprofitComponent } from './nonprofit/nonprofit.component';
import { ProfileComponent } from './profile/profile.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CategoriesComponent, NonprofitComponent, ProfileComponent, SplashComponent],
  imports: [NgbModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
