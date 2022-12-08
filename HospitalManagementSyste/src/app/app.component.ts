import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalManagementSyste';
  someValue: string = 'trr';
  someValues: Array<string> = new Array<string>();
  BtnClick() {
    // alert('hi');
    this.someValues.push(this.someValue);
    this.someValue = "";
  }
}
