import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isNotLogged: boolean;
  user = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log("response" ,res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/landingpage']);
        },
        err => {
          console.log(err)
          this.isNotLogged = true;
        }
      )
  }

}
