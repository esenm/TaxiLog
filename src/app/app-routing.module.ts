import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDriveComponent } from './add-drive/add-drive.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'add-drive', component: AddDriveComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
