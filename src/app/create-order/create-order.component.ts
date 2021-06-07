import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {formatDate} from '@angular/common';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  orderForm:FormGroup;
  
  constructor(private fb:FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.orderForm= this.fb.group({
      provInitials:['',Validators.required],
      orderDate:[new Date().toDateString(),Validators.required],
      deliveryDate:['',Validators.required],
      provCompName:['',Validators.required],
      compAddress:['',Validators.required],
      materials: this.fb.array([this.initMaterial()])
    });
  }


  initMaterial(){
    return this.fb.group({
    name:['',Validators.required],
    measure: ['',Validators.required],
    unitPrice:['',Validators.required],
    quantity:['',Validators.required]
    })
  }
}
