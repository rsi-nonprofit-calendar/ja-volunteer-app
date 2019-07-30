import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { AnimalsCategoryComponent } from './animals-category/animals-category.component';
import { TransportationCategoryComponent } from './transportation-category/transportation-category.component';
import { EqualityCategoryComponent } from './equality-category/equality-category.component';
import { EnvironmentCategoryComponent } from './environment-category/environment-category.component';
import { EducationCategoryComponent } from './education-category/education-category.component';
import { HousingCategoryComponent } from './housing-category/housing-category.component';
import { ChildrenCategoryComponent } from './children-category/children-category.component';
import { HealthcareCategoryComponent } from './healthcare-category/healthcare-category.component';
import { TechnologyCategoryComponent } from './technology-category/technology-category.component';

@NgModule({
  declarations: [
    AppComponent,
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
    TechnologyCategoryComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
