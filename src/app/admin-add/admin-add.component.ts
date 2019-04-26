import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  public admin : Admin  = new Admin();

  constructor(public apiService: ApiService , public acRoute : ActivatedRoute) {
};
    ngOnInit() {

      this.acRoute.params.subscribe((data : any)=>{
      console.log(data.id);
      if(data && data.id){
          this.apiService.get("admins/"+data.id).subscribe((data : Admin)=>{
          this.admin = data;
          });
      }
      else
      {
          this.admin = new Admin();
      }
    })
  }
  public onSubmit(){
    console.log("Adding a admin: " + this.admin.name);
    if(this.admin.id){
    this.apiService.update("admins/"+this.admin.id,this.admin).subscribe((r)=>{
        console.log(r);
        alert("Admin updated !");
    })
  }
    else
  {
    this.apiService.post("admins",this.admin).subscribe((r)=>{
    console.log(r);
    this.admin = new Admin();
    alert("Admin added !");

    });
  }

}
}
