import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  cookieValue = 'UNKNOWN';
  model: any = {};

  errorMessage: string;
  constructor(private router: Router, private LoginService: LoginService) { }

  ngOnInit() {
    sessionStorage.removeItem("UserName");
    sessionStorage.clear();
    // Once response returned from backend, save that info in a cookie:
    this.cookie.set("userId", "1");
    this.cookieValue = this.cookie.get('userId');


  }
  login() {


    this.LoginService.Login(this.model).subscribe(response => {
      this.model = response.filter(u => u.userType === "Org");  //  instead of userId of 2, pass in dynamic variable which will be userId of logged in user.  
    });
    // routeUser(userType) {
    //   this.userType = "Org" ? this.router.navigate(["organization-dashboard"]) : this.router.navigate(["volunteer-dashboard"]);
    // }

    // this.LoginService.Login(this.model).subscribe(
    //   data => {

    //     if (this.cookie.get("userType") === "Organization") {
    //       this.router.navigate(["/organization-dashboard"]);
    //     } else {
    //       if (this.cookie.get("userType") === "Volunteer")
    //         this.router.navigate(["/organization-dashboard"]);
    //     }
    //     return
    //     this.errorMessage = data.Message;
    //   },
    //   error => {
    //     this.errorMessage = error.message;
    //   }
    // );


    // this.LoginService.Login(this.model).subscribe(
    //   data => {

    //     if (data.Status == "Success") {
    //       this.router.navigate(["profile"]);

    //     } else {
    //       this.errorMessage = data.Message;
    //     }
    //   },
    //   error => {
    //     this.errorMessage = error.message;
    //   }
    // );
  }
}
