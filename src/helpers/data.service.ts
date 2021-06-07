import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from 'src/model/card';
import { Material } from 'src/model/material';
import { Operation } from 'src/model/operation';
import { State } from 'src/model/state';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }



  public getAllStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/states.php`);
  }

  public getAllOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(`${this.baseUrl}/operations.php`);
  }
  public getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.baseUrl}/providers.php`);
  }
  public addProvider(provider:Provider){
    return this.http.post<Provider>(`${this.baseUrl}/add_provider.php`,provider);
  }
  public getAllCards():Observable<Card[]>{
    return this.http.get<Card[]>(`${this.baseUrl}/card/get.php`);
  }
  public addCard(card: Object) {
    return this.http.post<any>(`${this.baseUrl}/card/create.php`, card);
  }

  public getStatesForId(card:Card):Observable<State[]> {
    return this.http.post<State[]>(`${this.baseUrl}/card/avail_states.php`,card);
  }
  public updateCard(id:number,state) {
    console.log({card_id:id,state_id:state});
    return this.http.post<any>(`${this.baseUrl}/card/update_state.php`, {card_id:id,state_id:state});
  }
  public getMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/materials.php`);
  }
  public addMaterial(material:Material){
    return this.http.post<Material>(`${this.baseUrl}/add_material.php`,material);
  }
}
