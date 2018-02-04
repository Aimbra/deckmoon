import { Routes } from '@angular/router'
import { LoginComponent } from './security/login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ExpendureComponent } from './expendure/expendure.component'
import { IncomingComponent } from './incoming/incoming.component'

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'expendure', component: ExpendureComponent },
    { path: 'incoming', component: IncomingComponent }
]
