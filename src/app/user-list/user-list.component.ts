import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public columns = ['id','name'];
  public rows : Array<User>;

  constructor(public apiService: ApiService , public router : Router){
};
  ngOnInit(){
    this.apiService.get("users").subscribe((data : User[])=>{
    console.log(data);
    this.rows = data;
  });
  }

  public delete(id:string){

    console.log("delete : " + id);
    var path = 'users/' + id;
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
    this.router.navigateByUrl('/users/add/' + id);
  }


}
