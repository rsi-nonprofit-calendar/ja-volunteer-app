import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./splash/splash.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CategoriesComponent } from "./categories/categories.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { AboutUsComponent } from "./about-us/about-us.component";

const routes: Routes = [
  { path: "", component: SplashComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "aboutUs", component: AboutUsComponent }
];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
