import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  data:any = {};

  googleURL = AppConstants.GOOGLE_AUTH_URL;
  facebookURL = AppConstants.FACEBOOK_AUTH_URL;
  githubURL = AppConstants.GITHUB_AUTH_URL;
  linkedinURL = AppConstants.LINKEDIN_AUTH_URL;

  private router!: Router;

  constructor (router : Router) {
    this.router = router;
  }

  login() {
    this.router.navigateByUrl('dashboard');
  }
}
