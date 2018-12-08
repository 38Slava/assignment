import { Component, OnInit } from '@angular/core';
import { Ticket, User } from '../../app.types';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];
  allTickets: Ticket[];
  loading: boolean;

  constructor(private backend: BackendService) { }

  ngOnInit() {
    this.loading = false;

    this.getTickets();
  }

  getTickets(): void {
    this.backend.tickets()
      .subscribe(tickets => {
        this.tickets = tickets;
        this.allTickets = tickets;
      });
  }

  add(description): void {
    this.loading = true;

    this.backend.newTicket({ description })
      .subscribe(ticket => {
        this.tickets.push(ticket as Ticket);
        this.loading = false;
      });
  }

  toggleComplete(id, completed): void {
    this.loading = true;

    this.backend.complete(id, completed)
      .subscribe(_ => {
        this.loading = false;
      });
  }

  filter(value): void {
    switch (+value) {
      case 0:
        this.tickets = this.allTickets;
        break;
      case 1:
        this.tickets = this.allTickets.filter(v => v.completed);
        break;
      case 2:
        this.tickets = this.allTickets.filter(v => !v.completed);
        break;
      default:
        break;
    }
  }

}
