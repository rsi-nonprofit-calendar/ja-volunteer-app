import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private cookieValue: string;
  title = "vol-army-app";

  constructor(
    private modalService: NgbModal,
    private cookieService: CookieService
  ) {}

  public ngOnInit(): void {
    this.cookieService.set("volunteer-calendar-cookie", "welcome-user-cookie");
    this.cookieValue = this.cookieService.get("volunteer-calendar-cookie");
    this.cookieService.delete("volunteer-calendar-cookie", " / ", " / ");
  }
}
