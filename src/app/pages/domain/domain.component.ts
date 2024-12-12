import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { domainValidator } from '../../core/validators/domain.validator';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-domain',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  template: `
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h2 class="text-center mb-4">{{ 'DOMAIN.TITLE' | translate }}</h2>
              <form [formGroup]="domainForm" (ngSubmit)="onSubmit()">
                <div class="mb-3">
                  <label for="domain" class="form-label">{{ 'DOMAIN.LABEL' | translate }}</label>
                  <input
                    type="text"
                    class="form-control"
                    id="domain"
                    formControlName="domain"
                    [class.is-invalid]="domainForm.get('domain')?.invalid && domainForm.get('domain')?.touched"
                  >
                  <div class="invalid-feedback" *ngIf="domainForm.get('domain')?.errors?.['required'] && domainForm.get('domain')?.touched">
                    {{ 'DOMAIN.ERRORS.REQUIRED' | translate }}
                  </div>
                  <div class="invalid-feedback" *ngIf="domainForm.get('domain')?.errors?.['invalidDomain']">
                    {{ 'DOMAIN.ERRORS.INVALID' | translate }}
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary" [disabled]="domainForm.invalid">
                    {{ 'COMMON.CONTINUE' | translate }}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DomainComponent {
  domainForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.domainForm = this.fb.group({
      domain: ['', [Validators.required, domainValidator]]
    });
  }

  onSubmit() {
    if (this.domainForm.valid) {
      const domain = this.domainForm.get('domain')?.value;
      this.authService.setDomain(domain);
      this.router.navigate(['/login']);
    }
  }
}