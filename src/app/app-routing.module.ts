import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component'

const routes: Routes = [
  // Layout componet and other pages
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/auth', pathMatch: 'full' },
      { path: 'home', component: DashboardComponent },
      { path: 'forget', component: ForgetPasswordComponent },
    ]
  },
  { path: 'auth', component: AuthComponent },
  {
    path: '**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
