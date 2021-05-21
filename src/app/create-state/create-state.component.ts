import { Component, OnInit, Provider } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CardService } from 'src/helpers/card.service';
import { Material } from 'src/model/material';
import { Operation } from 'src/model/operation';
import { State } from 'src/model/state';
import { MaterialService } from '../materials/material.service';

@Component({
  selector: 'app-create-state',
  templateUrl: './create-state.component.html',
  styleUrls: ['./create-state.component.css']
})
export class CreateStateComponent implements OnInit {

  error: '';
  materials: Material[];
  states: State[];
  operations: Operation[];
  providers: Provider[];
 

  cardForm: FormGroup;
  constructor(private fb: FormBuilder, private m: MaterialService, private card: CardService) { }

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
    this.m.getAllMaterials().subscribe(
      (res: Material[]) => {
        this.materials = res;
      },
      (err) => { this.error = err; }
    )
  }

  getOperations(): void {
    this.card.getAllOperations().subscribe(
      (res: Operation[]) => {
        this.operations = res;
      },
      (err) => { this.error = err; }
    )
  }
  getStates(): void {
    this.card.getAllStates().subscribe(
      (res: State[]) => {
        this.states = res;
      },
      (err) => { this.error = err; }
    )
  }
  getProviders(): void {
    this.card.getAllProviders().subscribe(
      (res: Provider[]) => {
        this.providers = res;
      },
      (err) => { this.error = err; }
    )
  }

  onSubmit() {
    this.card.addCard(this.cardForm.value).subscribe(
      (data) => {
        console.log(data);
      });
  }

  isFieldInvalid(field: string): boolean {
    const fieldName = this.cardForm.controls[field];
    return fieldName.invalid && fieldName.touched;
  }
  InvalidUntouched(field:string):boolean{
    const fieldName=this.cardForm.controls[field];
    return fieldName.untouched && fieldName.invalid;
  }
  CardInvalid(): boolean {
    return this.InvalidUntouched('material_id') || this.InvalidUntouched('state_id') || this.InvalidUntouched('operation_id') || this.InvalidUntouched('provider');
  }
}