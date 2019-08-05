import { JoinEventService } from "./join-event/join-event.service";
import { CookieService } from "ngx-cookie-service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlatpickrModule } from "angularx-flatpickr";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { HttpClientModule } from "@angular/common/http";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageComponent } from "./page/page.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { AppRoutingModule } from "./app-routing.module";
import { SignInModal } from "./sign-in/sign-in.component";
import { SignUpModal } from "./sign-up/sign-up.component";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CategoriesComponent } from "./categories/categories.component";
import { NonprofitComponent } from "./nonprofit/nonprofit.component";
import { ProfileComponent } from "./profile/profile.component";
import { SplashComponent } from "./splash/splash.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AnimalsCategoryComponent } from "./animals-category/animals-category.component";
import { TransportationCategoryComponent } from "./transportation-category/transportation-category.component";
import { EqualityCategoryComponent } from "./equality-category/equality-category.component";
import { EnvironmentCategoryComponent } from "./environment-category/environment-category.component";
import { EducationCategoryComponent } from "./education-category/education-category.component";
import { HousingCategoryComponent } from "./housing-category/housing-category.component";
import { ChildrenCategoryComponent } from "./children-category/children-category.component";
import { HealthcareCategoryComponent } from "./healthcare-category/healthcare-category.component";
import { TechnologyCategoryComponent } from "./technology-category/technology-category.component";
import { JoinEventComponent } from "./join-event/join-event.component";
import { WatermelonMountainRanchComponent } from "./watermelon-mountain-ranch/watermelon-mountain-ranch.component";
import { DonateComponent } from "./donate/donate.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FaqComponent } from "./faq/faq.component";

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CreateEventComponent,
    NavbarComponent,
    CategoriesComponent,
    NonprofitComponent,
    ProfileComponent,
    SplashComponent,
    CalendarComponent,
    AboutUsComponent,
    SignInModal,
    SignUpModal,
    AnimalsCategoryComponent,
    TransportationCategoryComponent,
    EqualityCategoryComponent,
    EnvironmentCategoryComponent,
    EducationCategoryComponent,
    HousingCategoryComponent,
    ChildrenCategoryComponent,
    HealthcareCategoryComponent,
    TechnologyCategoryComponent,
    WatermelonMountainRanchComponent,
    DonateComponent,
    GalleryComponent,
    FaqComponent,
    JoinEventComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [JoinEventService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
