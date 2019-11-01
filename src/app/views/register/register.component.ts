import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { UserServices } from '../../services/register-users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  user: User = new User('', '', '', '', '', '', '', '', '', '', '', []);
  message: any;

  constructor(private service: UserServices) { }

  ngOnInit() {

  }

  public registerNewUsers() {
    let response = this.service.registerUsers(this.user);
    response.subscribe((returnedData) => this.message = returnedData );
    console.log('response is ' + response);
  }

}
