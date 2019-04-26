import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public columns = ['id','name'];
  public rows : Array<Ticket>;

  constructor(public apiService: ApiService , public router : Router){
};
  ngOnInit(){
    this.apiService.get("tickets").subscribe((data : Ticket[])=>{
    console.log(data);
    this.rows = data;
  });
  }

  public delete(id:string){

    console.log("delete : " + id);
    var path = 'tickets/' + id;
    this.apiService.delete(path).subscribe((r)=>{

    this.rows = this.rows.filter((p,i)=>{
        if(Number(id) === p.id ){
        return false;
      }
        return true;
    },this.rows)

    });

  }
  public update(id:string){
    console.log("update : " + id );
    this.router.navigateByUrl('/tickets/add/' + id);
  }


}
