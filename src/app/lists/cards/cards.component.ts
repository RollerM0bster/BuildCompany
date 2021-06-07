import { StaticSymbolResolver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Directive } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/helpers/data.service';
import { Card } from 'src/model/card';
import { State } from 'src/model/state'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Card[];
  state_id:string;
  state:State;
  error: '';
  constructor(private ds: DataService, private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.getAllCards();
 
  }


  public getAllCards(): void {
    this.ds.getAllCards().subscribe((res: Card[]) => {
      this.cards = res;
      console.log(this.cards);

    },
      (error) => { this.error = error; })
  }

  Reject(card:Card,state:State){
    

    
    if(state.id==1){
      this.state_id='6';
      this.ds.updateCard(card.id,this.state_id);
      window.location.reload();
    }else{
      this.state_id='10';
      this.ds.updateCard(card.id,this.state_id);
      window.location.reload();
    }
  }
  Finish(card:Card,state:State){
    if(state.id==1){
      this.state_id='5';
            console.log(card.id,this.state_id);
      this.ds.updateCard(card.id,this.state_id);
      window.location.reload();
    }else{
      this.state_id='9';
      this.ds.updateCard(card.id,this.state_id);
      window.location.reload();
    }
  }
  public hideButton(state: State) {
    if (state.id == 5 || state.id == 6 || state.id == 9 || state.id == 10) {
      return false;
    }
    return true;
  }
  public hide(state: State) {
    if (state.id != 1) {
      return false;
    } else {
      return true;
    }
  }
}
