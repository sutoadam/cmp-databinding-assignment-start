import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<{number: number}>();
  aNumber = 1;
  intervalRef: number;

  constructor() { }

  ngOnInit() {
  }

  startInterval() {
    this.intervalRef = setInterval(() =>{
      this.intervalStarted.emit({
        number: this.aNumber}
        );
    },1000);
    this.aNumber++;
  }

  stopInterval() {
    clearInterval(this.intervalRef);
  }
}
