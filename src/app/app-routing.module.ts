import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDriveComponent } from './add-drive/add-drive.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add-drive', component: AddDriveComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
