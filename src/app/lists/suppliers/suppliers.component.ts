import { Component, OnInit, Provider } from '@angular/core';
import { DataService } from 'src/helpers/data.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

provider:Provider[];
error:'';
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.getProviders();
  }


  getProviders(): void {
    this.ds.getAllProviders().subscribe(
      (res: Provider[]) => {
        console.log(res);
        this.provider = res;
      },
      (err) => { this.error = err; }
    )
  }
}
