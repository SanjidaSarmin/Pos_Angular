import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth/auth.service';
import { LoginService } from '../Service/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router

  ) { }
  
  loginForm: FormGroup = new FormGroup({
    Email: new FormControl(),
    Pass: new FormControl()
  });

  userList: any[] = [];

  onSubmit() {
    this.loginService.getAll().subscribe((val: any) => {
      this.userList = val

      let flag = false;
      for (let i = 0; i < this.userList.length; i++) {
        if (this.loginForm.value.Email == this.userList[i].Email &&
          this.loginForm.value.Pass == this.userList[i].Pass) {

          localStorage.setItem("isLogin", "true");
          localStorage.setItem("Email", this.userList[i].Email);
          localStorage.setItem("role", this.userList[i].role);

          flag = true;
        }
      }

      if (flag == true) {
        this.authService.changeMessage('true');
        this.router.navigateByUrl('/dashboard/home')
      } else {
        alert("Incorrect Email or Password")
      }
      console.log("LogIn successfully");

    })
  }
}
