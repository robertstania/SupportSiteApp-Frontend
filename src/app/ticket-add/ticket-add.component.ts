import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {

  public ticket : Ticket  = new Ticket();

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) {
};
    ngOnInit() {

      this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.get("tickets/"+data.id).subscribe((data : Ticket)=>{
          this.ticket = data;
          });
      }
      else
      {
          this.ticket = new Ticket();
      }
    })
  }
  public onSubmit(){
    console.log("Adding a ticket: " + this.ticket.reference);
    if(this.ticket.id){
    this.apiService.update("tickets/"+this.ticket.id,this.ticket).subscribe((r)=>{
        console.log(r);
        alert("Ticket updated !");
    })
  }
    else
  {
    this.apiService.post("tickets",this.ticket).subscribe((r)=>{
    console.log(r);
    this.ticket = new Ticket();
    alert("Ticket added !");

    });
  }

}
}
