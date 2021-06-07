import { Component, OnInit, Provider } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/helpers/data.service';
import { Material } from 'src/model/material';
import { Operation } from 'src/model/operation';
import { State } from 'src/model/state';


@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  alert:boolean=false;
  error: '';
  materials: Material[];
  states: State[];
  operations: Operation[];
  providers: Provider[];
 

  cardForm: FormGroup;
  constructor(private fb: FormBuilder, private m: DataService) { }

  ngOnInit(): void {
    this.initForm();
    this.getMaterials();
    this.getOperations();
    this.getStates();
    this.getProviders();
  }

  initForm() {
    this.cardForm = this.fb.group({
      material_id: ['', Validators.required],
      state_id: ['', Validators.required],
      operation_id: ['', Validators.required],
      count: [1, [Validators.required,Validators.max(1000),Validators.pattern("^[0-9]*$")]],
      provider: ['', Validators.required]

    });
  }
  getMaterials(): void {
    this.m.getMaterials().subscribe(
      (res: Material[]) => {
        this.materials = res;
      },
      (err) => { this.error = err; }
    )
  }

  getOperations(): void {
    this.m.getAllOperations().subscribe(
      (res: Operation[]) => {
        this.operations = res;
      },
      (err) => { this.error = err; }
    )
  }
  getStates(): void {
    this.m.getAllStates().subscribe(
      (res: State[]) => {
        this.states = res;
      },
      (err) => { this.error = err; }
    )
  }
  getProviders(): void {
    this.m.getAllProviders().subscribe(
      (res: Provider[]) => {
        this.providers = res;
      },
      (err) => { this.error = err; }
    )
  }

  onSubmit() {
    this.m.addCard(this.cardForm.value).subscribe(
      (data) => {
        this.alert=true;
        this.cardForm.reset();
      });
  }

  closeAlert(){
    this.alert=false;
  }
  isFieldInvalid(field: string): boolean {
    const fieldName = this.cardForm.controls[field];
    return fieldName.invalid && fieldName.touched;
  }
  InvalidUntouched(field:string):boolean{
    const fieldName=this.cardForm.controls[field];
    return fieldName.invalid;
  }
  CardInvalid(): boolean {
    return this.InvalidUntouched('material_id') || this.InvalidUntouched('state_id') || this.InvalidUntouched('operation_id') || this.InvalidUntouched('provider');
  }
}