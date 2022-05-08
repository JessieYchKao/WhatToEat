import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { Option } from '../interface/option';
import { MockData } from './mock';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor() { }

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
}
