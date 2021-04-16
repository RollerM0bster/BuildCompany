import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Material} from '../../model/material';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private baseUrl=environment.baseUrl;
  materials:Material[];
  constructor(private http: HttpClient) {
   }

   getAllMaterials():Observable<Material[]>{
      return this.http.get<Material[]>(`${this.baseUrl}/materials.php`);
   }

   private handleError(error:HttpErrorResponse){
     console.log(error);
   }
}
