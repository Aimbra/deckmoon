import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'


import { AppComponent } from './app.component'
import { IncomingComponent } from './incoming/incoming.component'
import { ExpendureComponent } from './expendure/expendure.component'
import { LoginComponent } from './security/login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoComponent } from './shared/logo/logo.component'


@NgModule({
  declarations: [
    AppComponent,
    IncomingComponent,
    ExpendureComponent,
    LoginComponent,
    DashboardComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
