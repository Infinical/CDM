import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private router: Router, private toastr: ToastrService) { }
    intercept(
        requests: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(requests).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    sessionStorage.setItem('h-token', event.headers.get('Authorization'));
                    if (
                        event.body.responseCode === '32' ||
                        event.body.responseCode === '30'
                    ) {
                        // let the user login

                        this.router.navigate(['/login']);
                        sessionStorage.clear();
                    }
                }

                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    if (error.error.success === false) {
                    } else {
                        this.toastr.error('Something');
                        this.router.navigate(['/login']);
                        sessionStorage.clear();
                    }
                }
                return throwError(error);
            })
        );
    }
}
