import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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
import { MenusService } from '../../services/menus.service';
import { ThemeService } from 'ng2-charts';
import { NgxSpinnerService } from 'ngx-spinner';

declare var particlesJs: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
@Injectable({ providedIn: 'root' })
export class LoginComponent implements OnInit {

  private subject = new Subject<any>();
  user: User = new User('', '', '', '', '', '', '', '', '', '', '', []);

  reqPayload: LoginRequestPayload = new LoginRequestPayload('', '');

  private username: string = '';
  private password: string = '';

  private message: any = '';
  private permitLogin: boolean = false;
  private responseCode: any = '';

  allMenus: AllowedMenus[] = [];
  accessMenus: string[] = [];

  myStyle: object = {};
  myParams: object = {};
  width: number = 95;
  height: number = 95;



  constructor(private service: UserServices, private router: Router, private http: HttpClient,
  private toastr: ToastrService, private menusService: MenusService, private spinner: NgxSpinnerService) { }



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

    // this.permitLogin = true;
    // this.allowLogin();
    // this.sendMenus();

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    this.service.loginUsers(this.reqPayload).subscribe(
      (response: any) => {
        this.responseCode = response.responseCode;
        this.permitLogin = (response.responseCode === '00');
        this.message = response.responseMessage;
        response.accessMenus.forEach( (element) => {
          this.accessMenus.push(element.description);
        });
        this.showToaster();
        this.sendMenus();
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
      this.router.navigateByUrl('/dashboard');
      this.spinner.hide();
    }
  }

  sendMenus(): void {
    for (const i in this.accessMenus) {
      this.menusService.sendMenu(this.accessMenus[i]);
    }
  }



}


