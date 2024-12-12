import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [TranslateModule],
  template: `
    <div *ngIf="message" class="alert alert-danger" role="alert">
      {{ message | translate }}
    </div>
  `
})
export class ErrorMessageComponent {
  @Input() message: string = '';
}