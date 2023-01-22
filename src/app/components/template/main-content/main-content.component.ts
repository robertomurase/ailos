import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  @Output() fireFormState = new EventEmitter();
  @Input() formSubmitted: boolean = false;
  @Input() formValid: boolean = false;

  ngOnInit(): void {}

  receiveFormState($event: any) {
    console.log($event);
    this.fireFormState.emit($event);
  }
}
