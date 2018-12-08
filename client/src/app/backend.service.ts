import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket, User } from '../app.types';

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) { }

  tickets() {
    return this.http.get<Ticket[]>('/api/tickets');
  }

  ticket(id: number) {
    return this.http.get<Ticket>(`/api/ticket/${id}`);
  }

  users() {
    return this.http.get<User[]>('/api/users');
  }

  user(id: number) {
    return this.http.get<User>(`/user/${id}`);
  }

  newTicket(payload: {description: string}) {
    return this.http.post('/api/tickets', payload);
  }

  assign(ticketId: number, assigneeId: number) {
    return this.http.post('/api/assign', { ticketId, assigneeId });
  }

  complete(ticketId: number, completed: boolean) {
    return this.http.post('/api/complete', {ticketId, completed});
  }
}
