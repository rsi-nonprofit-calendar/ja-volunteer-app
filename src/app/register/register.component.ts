import { Component, OnInit } from "@angular/core";
import { LoginService } from "../login.service";
import { Register } from "../register";
import { Observable } from "rxjs";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  data = false;
  UserForm: any;
  massage: string;
  constructor(
    private formbulider: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.UserForm = this.formbulider.group({
      UserName: ["", [Validators.required]],
      FirstName: ["", [Validators.required]],
      LastName: ["", [Validators.required]],
      Email: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      UserAboutMe: ["", [Validators.required]]
    });
  }
  onFormSubmit() {
    const user = this.UserForm.value;
    this.CreateNewUser(user);
  }
  CreateNewUser(register: Register) {
    this.loginService.CreateUser(register).subscribe(() => {
      this.data = true;
      this.massage = "Data saved Successfully";
      this.UserForm.reset();
    });
  }
}
