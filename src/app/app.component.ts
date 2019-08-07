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
  private cookieValue = "UNKNOWN";
  title = "vol-army-app";

  constructor(
    private modalService: NgbModal,
    private cookieService: CookieService
  ) {}

  public ngOnInit(): void {
    this.cookieService.set("Volunteer Calendar", "Cookies! Nom! Nom!", 1);
    this.cookieValue = this.cookieService.get("Volunteer Calendar");
  }
}
