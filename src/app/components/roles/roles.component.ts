import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms' ; 
import { IRole } from '../../model/class/interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  // firstName:string="Angular Tutorial";
  // angularVersion="version 18";
  // version:number=18;
  // isActive:boolean=true;
  // currentDate:Date=new Date();

  // inputType:string="radio";
  // inputCheckbox:string="checkbox";
  // inputButton:string="button";
  // Value:string="button";

  // selectedState:string='';

  // showWelcomeAlert(){
  //   alert("welcome to the angular 18");
  // }
  // showMessage(message:string){
  //   alert(message);
  // }

//  constructor(private http:HttpClient){}

http=inject(HttpClient);
roleList:IRole[]=[];
ngOnInit(): void {
  this.getAllRoles();
}
  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
      this.roleList = res.data;
    })
  }
}
