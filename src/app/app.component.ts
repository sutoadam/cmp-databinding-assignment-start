import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];


  onIntervalEmit($event: { number: number }) {
    if ($event.number % 2 === 0) {
      this.evenNumbers.push($event.number);
    } else {
      this.oddNumbers.push($event.number);
    }
  }
}
