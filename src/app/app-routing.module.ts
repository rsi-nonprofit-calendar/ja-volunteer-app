import { VolunteerCalendarComponent } from './volunteer-calendar/volunteer-calendar.component';
import { CreateVolunteerProfileComponent } from './create-volunteer-profile/create-volunteer-profile.component';
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
import { OrganizationDashboardComponent } from './organization-dashboard/organization-dashboard.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { VolunteerDashboardComponent } from './volunteer-dashboard/volunteer-dashboard.component';

const routes: Routes = [
  { path: "", component: SplashComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "calendar", component: VolunteerCalendarComponent },
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
  },
  { path: "organization-dashboard", component: OrganizationDashboardComponent },
  { path: "volunteer-dashboard", component: VolunteerDashboardComponent },
  { path: "create-volunteer-profile", component: CreateVolunteerProfileComponent },
];

@NgModule({
  imports: [NgbModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
