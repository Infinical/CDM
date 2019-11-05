import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { User } from '../../models/user';
import { LoginResponse } from '../../models/loginResponse';
import { UserServices } from '../../services/register-users.service';
import { environment } from '../../../environments/environment';
import { LoginRequestPayload} from '../../models/loginRequestPayload';
import { AllowedMenus } from '../../models/menusForGroup';

declare var particlesJs: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  user: User = new User('', '', '', '', '', '', '', '', '', '', '', []);

  reqPayload: LoginRequestPayload = new LoginRequestPayload('', '');

  private username: string = '';
  private password: string = '';

  private message: any = '';
  private permitLogin: boolean = false;
  private responseCode: any = '';

  allMenus: AllowedMenus[] = [];

  myStyle: object = {};
  myParams: object = {};
  width: number = 95;
  height: number = 95;

  constructor(private service: UserServices, private router: Router, private http: HttpClient,
    private toastr: ToastrService) { }

  ngOnInit() {
    sessionStorage.clear();

    this.myStyle = {
      'position': 'fixed',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

this.myParams = {
      particles: {
          number: {
              value: 70,
              density: {
                enable: true,
                value_area: 800
              }
          },
          shape: {
              type: 'triangle',
          },
  }
};
  }

  loginUsers(): any {
    this.setupPayload();
    this.service.loginUsers(this.reqPayload).subscribe(
      (response: any) => {
        this.responseCode = response.responseCode;
        this.permitLogin = (response.responseCode === '00');
        this.message = response.responseMessage;
        this.showToaster();
        this.allowLogin();
      });
  }

  setupPayload() {
    this.reqPayload.username = this.username;
    this.reqPayload.password = this.password;
  }

  showToaster(): any {
    if (this.permitLogin) {
      this.toastr.success(this.message);
    } else {
      this.toastr.error(this.message);
    }
  }

  allowLogin() {
    if (this.permitLogin) {
      console.log('called');
      this.router.navigateByUrl('/dashboard');
    }
  }



}


