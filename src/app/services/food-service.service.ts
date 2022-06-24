import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { GeneratorPara, Option } from '../interface/option';
import { MockData } from './mock';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private http: HttpClient) { }

  getFoodOptions() {
    return of(MockData).pipe(
      map(x => {
        return x.map(op =>  {
          return {
            name: op.type,
            type: op.type,
            choice: op.choice
          } as Option;
        })
      })
    );
  }

  generate(para: GeneratorPara[]): Observable<any> {
    // return this.http.post('random', para);
    return this.http.get('random');
    // return this.http.get('dev');
  }

  getPlacePhoto(reference: string): Observable<any> {
    return this.http.get(`random/place_photo/${reference}`, {responseType: 'blob' as 'json'});
  }
}
