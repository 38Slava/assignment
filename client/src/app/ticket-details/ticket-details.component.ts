import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { Ticket, User } from '../../app.types';
import { mergeMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticket: Ticket;
  users: User[];
  assignedUser: User;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.loading = false;
    this.getData();
  }

  getTicket() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.backend.ticket(id)
      .subscribe(ticket => this.ticket = ticket);
  }

  getUsers(): void {
    this.backend.users()
      .subscribe(users => this.users = users);
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    forkJoin([
      this.backend.ticket(id),
      this.backend.users()
    ])
      .subscribe(([ticket, users]) => {
        this.ticket = ticket;

        const u = users as any;

        this.users = u;

        this.assignedUser = u.find(value => value.id === ticket.assigneeId);
      });
  }

  assignUser() {
    this.loading = true;
    this.backend.assign(this.ticket.id, this.assignedUser.id)
      .subscribe(_ => this.loading = false);
  }

}
