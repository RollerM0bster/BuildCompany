import { Component, OnInit } from '@angular/core';
import { Material } from '../../../model/material';
import {DataService} from '../../../helpers/data.service';
import { AuthService } from '../../../helpers/auth.service';
@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials: Material[];
  error = '';
  success = '';
  constructor(private ds: DataService, private log: AuthService) { }

  ngOnInit(): void {
    this.getMaterials();

  }

  getMaterials(): void {
    this.ds.getMaterials().subscribe(
      (res: Material[]) => {
        this.materials = res;
      },
      (err) => { this.error = err; }
    )
  }
}
