import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mt-4">
      <h1>Welcome to Scanning App</h1>
      <p class="lead">Start scanning documents with ease</p>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Quick Scan</h5>
              <p class="card-text">Start a new scanning session instantly.</p>
              <a routerLink="/scan" class="btn btn-primary">Start Scanning</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}