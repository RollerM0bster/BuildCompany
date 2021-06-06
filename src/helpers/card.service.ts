import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operation } from 'src/model/operation';
import { State } from 'src/model/state';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }


  
  getAllStates():Observable<State[]>{
    return this.http.get<State[]>(`${this.baseUrl}/states.php`);
 }

 getAllOperations():Observable<Operation[]>{
   return this.http.get<State[]>(`${this.baseUrl}/operations.php`);
 }
 getAllProviders():Observable<Provider[]>{
   return this.http.get<Provider[]>(`${this.baseUrl}/providers.php`);
 }

 public addCard(card:Object){
   return this.http.post<any>(`${this.baseUrl}/card/create.php`,card);
 }
}
