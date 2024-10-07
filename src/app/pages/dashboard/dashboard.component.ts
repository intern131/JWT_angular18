import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  

  http = inject(HttpClient);
  
  ngOnInit(): void {
    this.getAllUsers();
  }

  userList:any[]=[];

  getAllUsers(){
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((Res:any)=>{
      this.userList=Res.data;
    })
  }

}
