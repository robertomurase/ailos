import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() formSubmitted: boolean = false;
  @Input() formValid: boolean = false;

  @Output() fireNovaAdmissao = new EventEmitter();

  public submitNovaAdmissao() {
    this.fireNovaAdmissao.emit({ formSubmitted: false, formValid: false });

    const event = new Event('clearForm');
    document.dispatchEvent(event);
  }
}
