import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Event } from '../interfaces/event.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    // TODO: Replace with actual API call
    return of([
      {
        id: '1',
        name: 'Tech Conference 2024',
        date: '2024-03-15',
        description: 'Annual technology conference',
        location: 'Convention Center',
        capacity: 1000,
        organizer: 'Tech Events Inc.'
      },
      {
        id: '2',
        name: 'Music Festival',
        date: '2024-04-20',
        description: 'Summer music festival',
        location: 'City Park',
        capacity: 5000,
        organizer: 'Music Events Ltd.'
      }
    ]);
  }

  searchEvents(query: string): Observable<Event[]> {
    // TODO: Implement actual API call with search
    return this.getEvents();
  }
}