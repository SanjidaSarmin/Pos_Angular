import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/Auth/auth.service';
import { LoginService } from '../Service/Login/login.service';
import { StorageService } from '../StorageService/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
    constructor(
      private authService: AuthService,
      private storageService: StorageService,
      private router: Router) { }
  
    ngOnInit(): void {
      if (this.storageService.isLoggedIn()) {
        const role = this.storageService.getUserRole();
        if (role) {
          if (role === 'ROLE_ADMIN') {
            this.router.navigate(['/admin/mainpage']);
          } else if (role === 'ROLE_MODERATOR') {
            this.router.navigate(['/manager/home']);
          } else {
            this.router.navigate(['/employee/main']);
          }
        } else {
          this.errorMessage = "Invalid username or password!";
        }
  
      }
    }
  
    username: string = '';
    password: string = '';
    errorMessage: string = '';
  
  
    onLogin() {
      
      if (!this.username || !this.password) {
        this.errorMessage = "Username and password are required!";
        return;
      }
  
  
      console.log(this.username, this.password);
  
  
  
      this.authService.login(this.username, this.password).subscribe({
  
        next: data => {
          this.storageService.saveUser(data);
          const role = this.storageService.getUserRole();
          if (role) {
  
            if (role === 'ROLE_ADMIN') {
              this.router.navigate(['/admin']);
            } else if (role === 'ROLE_MODERATOR') {
              console.log('-------------------', role);
              this.router.navigate(['/manager']);
            } else {
              this.router.navigate(['/employee']);
            }
          } else {
            this.errorMessage = "Invalid username or password!";
          }
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
  
    }
    form: any = {
      username: null,
      password: null
    };
  
    reloadPage(): void {
      window.location.reload();
    }
  }
