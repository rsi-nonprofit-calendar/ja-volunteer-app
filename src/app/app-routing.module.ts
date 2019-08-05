import { CreateEventComponent } from "./create-event/create-event.component";
import { JoinEventComponent } from "./join-event/join-event.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SplashComponent } from "./splash/splash.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CategoriesComponent } from "./categories/categories.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProfileComponent } from "./profile/profile.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FaqComponent } from "./faq/faq.component";
import { DonateComponent } from "./donate/donate.component";
import { WatermelonMountainRanchComponent } from "./watermelon-mountain-ranch/watermelon-mountain-ranch.component";

const routes: Routes = [
  { path: "", component: SplashComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "join-event", component: JoinEventComponent },
  { path: "profile", component: ProfileComponent },
  { path: "aboutUs", component: AboutUsComponent },
  { path: "create-event", component: CreateEventComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "faq", component: FaqComponent },
  { path: "donate", component: DonateComponent },
  {
    path: "watermelon-mountain-ranch",
    component: WatermelonMountainRanchComponent
  }
];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
