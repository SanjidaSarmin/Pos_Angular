import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Service/Login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    private signService: LoginService,
    private router: Router

  ) { }

  signupForm: FormGroup = new FormGroup({
    userFirstName: new FormControl(),
    userLastName: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });
  
  onSubmit() {
    this.signService.addData(this.signupForm.value).subscribe((val: any) => {
      console.log("SignIn successfully");
      this.router.navigateByUrl('/login')

    })
  }
}
