import { ChoiceCheckbox, Country, FoodType, MainCategory, OtherOptions, PriceRange, ServeType } from './../interface/option';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { GeneratorPara, Option, OptionType } from '../interface/option';
import { HttpClient } from '@angular/common/http'
import { StoreDetail } from '../interface/store';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  foodOptions: Option[] = [
    {
        type: OptionType.mainCategory,
        name: OptionType[OptionType.mainCategory],
        choice: Object.keys(OtherOptions).concat(Object.keys(MainCategory)).filter(x => isNaN(Number(x))).map(x => {
          return {
            choice: x === 'all' ? 'all' : `${OptionType[OptionType.mainCategory]}.${x}`,
            isChecked: false
          } as ChoiceCheckbox;
        })
    },
    {
        type: OptionType.foodType,
        name: OptionType[OptionType.foodType],
        choice: Object.keys(OtherOptions).concat(Object.keys(FoodType)).filter(x => isNaN(Number(x))).map(x => {
          return {
            choice: x === 'all' ? 'all' : `${OptionType[OptionType.foodType]}.${x}`,
            isChecked: false
          } as ChoiceCheckbox;
        })
    },
    {
        type: OptionType.country,
        name: OptionType[OptionType.country],
        choice: Object.keys(OtherOptions).concat(Object.keys(Country)).filter(x => isNaN(Number(x))).map(x => {
          return {
            choice: x === 'all' ? 'all' : `${OptionType[OptionType.country]}.${x}`,
            isChecked: false
          } as ChoiceCheckbox;
        })
    },
    {
        type: OptionType.priceRange,
        name: OptionType[OptionType.priceRange],
        choice: Object.keys(OtherOptions).concat(Object.keys(PriceRange)).filter(x => isNaN(Number(x))).map(x => {
          return {
            choice: x === 'all' ? 'all' : `${OptionType[OptionType.priceRange]}.${x}`,
            isChecked: false
          } as ChoiceCheckbox;
        })
    },
    {
        type: OptionType.serveType,
        name: OptionType[OptionType.serveType],
        choice: Object.keys(OtherOptions).concat(Object.keys(ServeType)).filter(x => isNaN(Number(x))).map(x => {
          return {
            choice: x === 'all' ? 'all' : `${OptionType[OptionType.serveType]}.${x}`,
            isChecked: false
          } as ChoiceCheckbox;
        })
    }
  ];

  constructor(private http: HttpClient) { }

  getChoices() {
    return this.foodOptions;
  }

  generate(para: GeneratorPara[]): Observable<StoreDetail> {
    // return this.http.post('random', para);
    return this.http.post<StoreDetail>('Random', para);
    // return this.http.get('dev');
  }

  getPlacePhoto(reference: string): Observable<any> {
    // return this.http.get(`random/place_photo/${reference}`, {responseType: 'blob' as 'json'});
    return this.http.get(`random/place_photo/${reference}`);
  }
}
