import { Component, inject,OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponsModel, IDesignation } from '../../model/class/interface/role';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

masterService = inject(MasterService);

DesigList:IDesignation[]=[];

ngOnInit(): void {
  this.masterService.getDesignations().subscribe((result:APIResponsModel)=>{
    this.DesigList=result.data;
  },error=>{
    alert("API error / Network down");
  })
}

}
