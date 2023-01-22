import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  formSubmitted: boolean = false;
  formValid: boolean = false;

  receiveFormState($event: any) {
    console.log($event);
    this.formSubmitted = $event.formSubmitted;
    this.formValid = $event.formValid;
  }
}
