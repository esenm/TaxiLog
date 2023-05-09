import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  name: string = 'Vincent Aboubakar';
  phone: string = '+43 650 421 8662';
  code: string = 'W-1903 TX';
  avatarText: string = '';

  constructor(private router: Router) {}

  updateProfileInfo() {
    // Hier können Sie den Code schreiben, um die aktualisierten Profilinfos zu speichern
    console.log('Aktualisierte Profilinfos:', this.name, this.phone, this.code);
  }

  logout() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    this.avatarText = this.name.charAt(0).toUpperCase();
  }
}
