import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar) { }

  setNewDate() {
    this.time = new Date().toLocaleTimeString();
  }

  resetValues() {
    this.time = '';
    this.destination= '';
    this.amount= 0;
    this.selectedOption = '';
  }

  save() {
    console.log("Time: ", this.time);
    console.log("Destination: ", this.destination);
    console.log("Amount: ", this.amount);
    console.log("Selected Option: ", this.selectedOption);

    this.snackBar.open('Ihre Fahrt wurde hinzugefügt!', 'Schließen', {
      duration: 5000, horizontalPosition: 'center',
      verticalPosition: 'top'
    });

    //this.resetValues();
  }
}
