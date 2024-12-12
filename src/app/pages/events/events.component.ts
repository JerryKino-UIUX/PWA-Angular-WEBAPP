import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <div class="row mb-4">
        <div class="col">
          <h2>Events</h2>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Search events..."
              [(ngModel)]="searchTerm"
              (ngModelChange)="onSearch()"
            >
            <button class="btn btn-outline-secondary">
              Search
            </button>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="list-group">
            <div *ngFor="let event of events" class="list-group-item">
              <h5>{{event.name}}</h5>
              <p>{{event.description}}</p>
              <small>{{event.date}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventsComponent implements OnInit {
  searchTerm: string = '';
  events: Event[] = [];

  ngOnInit() {
    // Mock data - replace with API call
    this.events = [
      {
        id: '1',
        name: 'Tech Conference 2024',
        date: '2024-03-15',
        description: 'Annual technology conference'
      },
      {
        id: '2',
        name: 'Music Festival',
        date: '2024-04-20',
        description: 'Summer music festival'
      }
    ];
  }

  onSearch() {
    // Implement search logic
  }
}