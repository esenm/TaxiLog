import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';


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

  selectedDate = new Date();

  constructor(private snackBar: MatSnackBar) { }

  resetValues() {
    //reset values except date
    this.destination = '';
    this.amount = 0;
    this.selectedOption = '';
  }

  save() {
    console.log("Date: ", this.selectedDate);
    console.log("Destination: ", this.destination);
    console.log("Amount: ", this.amount);
    console.log("Selected Option: ", this.selectedOption);

    this.snackBar.open('Ihre Fahrt wurde hinzugefügt!', 'Schließen', {
      duration: 4000, horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    //this.resetValues();
  }
}