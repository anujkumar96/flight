import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private _shared: SharedService) {}
  logindata!: FormGroup;
  ngOnInit(): void {
    this.logindata = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  login() {
    this._shared.getuserdata().subscribe(
      (res: any) => {
        const user = res.find((a: any) => {
          return (
            a.username == this.logindata.value.username &&
            a.password == this.logindata.value.password
          );
        });
        if (user) {
          localStorage.setItem('userid', JSON.stringify(user.id));
          this.logindata.reset();
          alert('login');
          this.router.navigate(['/book']);
        } else {
          alert('user not found');
        }
        this._shared.setUser(user);
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }
}
