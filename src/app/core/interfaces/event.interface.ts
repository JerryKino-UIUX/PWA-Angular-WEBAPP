export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  location?: string;
  capacity?: number;
  organizer?: string;
}