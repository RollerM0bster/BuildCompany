import { Component, OnInit } from '@angular/core';
import { Material } from '../material';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials: Material[];
  constructor() { }

  ngOnInit(): void {
    this.materials=[{
      "id":1,
      "name":"Какой-то материал",
      "measure":"шт.",
      "unitPrice":300,
      "quantity":20
    }]
  
  }

}
