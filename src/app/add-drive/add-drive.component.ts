import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: ['./add-drive.component.scss']
})
export class AddDriveComponent {

  currentDate: any;

  constructor(private router: Router) { }

  setNewDate()
  {
    this.currentDate = new Date();
  }
}
