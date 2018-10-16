import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counterValue = 0;
  @Output() counterChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  get counter() {
    console.log('getter');
    return this.counterValue;
  }

  set counter(val) {
    if (this.counter !== val) {
      this.counterValue = val;
      this.counterChange.emit(this.counterValue);
      console.log('setter, emitting event');
    } else {
      return;
    }
  }
}
