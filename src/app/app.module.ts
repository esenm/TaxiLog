import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AddDriveComponent } from './add-drive/add-drive.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { BottomNavBarComponent } from './ui-components/bottom-nav-bar/bottom-nav-bar.component';
import { ButtonComponent } from './ui-components/button/button.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { MatSelectModule } from '@angular/material/select';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddDriveComponent,
    BottomNavBarComponent,
    ButtonComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
