import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user';
import { Material } from '../../../model/material';
import {MaterialService} from '../material.service';
import {AuthService} from '../../../helpers/auth.service';
@Component({
  selector: 'app-material-list',
  templateUrl:'./material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials: Material[];
  error='';
  success='';
  constructor(private materialService:MaterialService,private log:AuthService) { }

  ngOnInit(): void {
    this.getMaterials();
    
  }

  getMaterials():void{
    this.materialService.getAllMaterials().subscribe(
      (res:Material[])=>{
        this.materials=res;
      },
      (err)=>{this.error=err;}
    )
  }
}
