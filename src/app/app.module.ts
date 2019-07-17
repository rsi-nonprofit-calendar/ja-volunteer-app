import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageComponent } from "./page/page.component";
import { CreateEventComponent } from "./create-event/create-event.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, PageComponent, CreateEventComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
