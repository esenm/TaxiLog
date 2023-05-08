import { Component } from '@angular/core';

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: ['./add-drive.component.scss']
})
export class AddDriveComponent {
  time: string = '';
  destination: string = '';
  amount: number = 0;
  selectedOption: string = '';
  options = [
    { label: 'Kreditkarte', value: 'kk' },
    { label: 'Bar', value: 'bar' }
  ];

  constructor() { }

  setNewDate() {
    this.time = new Date().toLocaleTimeString();
  }

  save() {
    console.log("Time: ", this.time);
    console.log("Destination: ", this.destination);
    console.log("Amount: ", this.amount);
    console.log("Selected Option: ", this.selectedOption);

  }
}
