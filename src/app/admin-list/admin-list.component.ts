import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  public columns = ['id','name'];
  public rows : Array<Admin>;

  constructor(public apiService: ApiService , public router : Router){
};
  ngOnInit(){
    this.apiService.get("admins").subscribe((data : Admin[])=>{
    console.log(data);
    this.rows = data;
  });
  }

  public delete(id:string){

    console.log("delete : " + id);
    var path = 'admins/' + id;
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
    this.router.navigateByUrl('/admins/add/' + id);
  }


}
