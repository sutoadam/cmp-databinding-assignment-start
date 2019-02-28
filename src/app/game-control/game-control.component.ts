import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEmit = new EventEmitter<{number: number}>();
  aNumber = 0;
  intervalRef = -1;

  constructor() { }

  ngOnInit() {
  }

  startInterval() {
    if(this.intervalRef === -1){
      this.intervalRef = setInterval(() =>{
        this.intervalEmit.emit({
          number: this.aNumber}
        );
        this.aNumber = this.aNumber + 1;
        console.log("emitted: " + this.aNumber);
      },1000);
    } else {
      return;
    }
  }

  stopInterval() {
    clearInterval(this.intervalRef);
    this.aNumber = 0;
  }
}
