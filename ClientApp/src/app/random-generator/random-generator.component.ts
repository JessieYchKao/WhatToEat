import { ChoiceCheckbox, Country, OtherOptions, PriceRange, ServeType } from './../interface/option';
import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, group } from '@angular/animations';
import { DialogContent } from '../interface/dialogContent';
import { FoodType, GeneratorPara, MainCategory, Option, OptionType } from '../interface/option';
import { FoodServiceService } from '../services/food-service.service';
import { StoreDetail } from '../interface/store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter',[
        style({opacity: 0}),
        animate('300ms 100ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('300ms ease-out', style({opacity: 0}))
      ]),
    ]),
    trigger('fadeInOutWithSlide', [
      transition(':enter',[
        style({opacity: 0}),
        animate('300ms 100ms ease-in', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('300ms ease-out', style({opacity: 0}))
      ]),
    ]),
    trigger('optionSlide', [
      transition(':enter',[
        style({transform: 'translateY(10px)'}),
        animate('300ms 100ms ease-in', style({transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms ease-out', style({opacity: 0}))
      ]),
    ])
  ]
})
export class RandomGeneratorComponent implements OnInit {
  isFilter: boolean = false;
  dialogContent: DialogContent = {
    title: '',
    visible: false
  };

  foodOptions: Option[];

  blobData: any;
  photoIndex: number = 0;
  result: StoreDetail;

  env = environment;

  constructor(
    private foodService: FoodServiceService,
  ) { }

  ngOnInit(): void {
    this.foodOptions = this.foodService.foodOptions;
  }

  toggle() {
    this.isFilter = !this.isFilter;
  }

  random() {
    console.log(this.foodOptions);
    const para: GeneratorPara[] = this.foodOptions.map(x => {
      return {
        type: x.type,
        choice: x.choice.filter(a => a.isChecked && a.choice !== 'all').map(a => {
          if (x.type === OptionType.mainCategory) {
            return MainCategory[(a.choice.toString().split('.')[1]) as unknown as MainCategory];
          } else if (x.type === OptionType.foodType) {
            return FoodType[(a.choice.toString().split('.')[1]) as unknown as FoodType];
          } else if (x.type === OptionType.country) {
            return Country[(a.choice.toString().split('.')[1]) as unknown as Country];
          } else if (x.type === OptionType.priceRange) {
            return PriceRange[(a.choice.toString().split('.')[1]) as unknown as PriceRange];
          } else if (x.type === OptionType.serveType) {
            return ServeType[(a.choice.toString().split('.')[1]) as unknown as ServeType];
          }
          return a.choice;
        })
      }
    })

    this.foodService.generate(para).subscribe(res => {
      this.photoIndex = 0;
      this.result = res;
      this.isFilter = false;
    });
  }

  getPhoto(operator: number) {
    this.photoIndex += operator;
  }

  openDialog(option: Option) {
    this.dialogContent.visible = true;
    this.dialogContent.type = option;
  }

  openWebsite(link: string) {
    window.open(link, '_blank');
  }

  clear() {
    this.foodOptions.forEach(x => {
      x.choice.forEach(y => y.isChecked = false)
    });
    this.result = {} as StoreDetail;
  }

  optionOnClick(choice: ChoiceCheckbox, option?: Option, ) {
    // all option triggered
    if (choice.choice === 'all') {
      if (choice.isChecked) {
        option?.choice.forEach(e => {
          e.isChecked = true;
        });
      } else {
        option?.choice.forEach(e => {
          e.isChecked = false;
        });
      }
    } else { // Detect if all options are selected
      if (option?.choice.every(x => x.choice === 'all' || x.isChecked)) {
        option.choice[0].isChecked = true;
      } else if (option?.choice.find(x => x.choice !== 'all' && !x.isChecked)) {
        option.choice[0].isChecked = false;
      }
    }
  }
}
