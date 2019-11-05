import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxPaginationModule } from 'ngx-pagination';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

// import { JwtModule } from '@auth0/angular-jwt';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { ParticlesModule } from 'angular-particle';

import { TokenInterceptor } from './interceptors/access-token.inteceptor';
import { AuthInterceptor } from './interceptors/send-token.interceptor';
import { HttpErrorInterceptor } from './interceptors/timeout-token.interceptor';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  // { path: '', component: HeroListComponent, data: { title: 'Heroes List' }},
  { path: '', redirectTo: '/login',  pathMatch: 'full'},
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    ParticlesModule,
    NgxSpinnerModule
    // JwtModule.forRoot({})
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true
  }
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
