import { Component } from '@angular/core';

@Component({
  selector: 'app-scan',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h2>Scanner</h2>
      <div class="row">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="scan-preview bg-light d-flex align-items-center justify-content-center" 
                   style="height: 400px;">
                <p class="text-muted">Camera preview will appear here</p>
              </div>
              <div class="mt-3">
                <button class="btn btn-primary me-2">
                  <i class="bi bi-camera"></i> Capture
                </button>
                <button class="btn btn-secondary">
                  <i class="bi bi-arrow-clockwise"></i> Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Scan Settings</h5>
              <div class="mb-3">
                <label class="form-label">Resolution</label>
                <select class="form-select">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Format</label>
                <select class="form-select">
                  <option>PDF</option>
                  <option>JPEG</option>
                  <option>PNG</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ScanComponent {}