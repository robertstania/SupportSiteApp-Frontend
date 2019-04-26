import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  admins;

  constructor(private http: Http) {
    http.get('http://localhost:3000/admins.json')
      .subscribe(res => this.admins = res.json());
    // http.get('http://localhost:3000/users.json')
      // .subscribe(res => this.users = res.json());
    // http.get('http://localhost:3000/tickets.json')
        // .subscribe(res => this.tickets = res.json());
  }
}
