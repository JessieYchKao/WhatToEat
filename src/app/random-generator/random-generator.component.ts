import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, group } from '@angular/animations';
import { DialogContent } from '../interface/dialogContent';
import { GeneratorPara, MainCategory, Option, OptionType, OtherOptions } from '../interface/option';
import { FoodServiceService } from '../services/food-service.service';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.scss'],
  animations: [
    trigger('storePic', [
      state('close', style({ marginTop: '3rem', transformOrigin: 'center top', transform: 'scale(1)' })),
      state('expand', style({ marginTop: '1rem', transformOrigin: 'center top', transform: 'scale(0.5)' })),
      transition('close => expand', animate('300ms ease-in')),
      transition('expand => close', animate('300ms ease-in')),
    ]),
    trigger('storeInfo', [
      state('close', style({ display: 'flex' })),
      state('expand', style({ display: 'none' })),
      transition('expand => close', animate('300ms ease-in')),
      transition('expand => close', animate('100ms')),
    ]),
    trigger('functionBtn', [
      state('close', style({ transform: 'translateY(0)' })),
      state('expand', style({ transform: 'translateY(-250%)' })),
      transition('close => expand', animate('300ms ease-in')),
      transition('expand => close', animate('300ms ease-in')),
    ])
  ]
})
export class RandomGeneratorComponent implements OnInit {
  filterOpen: string = 'close';
  dialogContent: DialogContent = {
    title: '',
    visible: false,
    type: {
      name: '',
      type: OptionType.mainCategory,
      choice: OtherOptions.all
    }
  };

  foodOptions: Option[] = [];
  blobData: any;
  photoIndex: number = 0;
  result: any;

  constructor(
    private foodService: FoodServiceService
  ) { }

  ngOnInit(): void {
    this.getOptions();
  }

  getOptions() {
    this.foodService.getFoodOptions().subscribe(res => {
      this.foodOptions = res;
    })
  }

  toggle() {
    this.filterOpen = this.filterOpen === 'close' ? 'expand' : 'close';
  }

  random() {
    const para: GeneratorPara[] = [
      {
        option: OptionType.mainCategory,
        choice: MainCategory.drink
      }
    ]
    this.foodService.generate(para).subscribe(res => {
      this.result = res;
      this.photoIndex = 0;
      this.getPhoto(0);
      this.filterOpen = 'close';
    });
  }

  getPhoto(operator: number) {
    this.photoIndex += operator;
    this.foodService.getPlacePhoto(this.result.photo_references[this.photoIndex]).subscribe(photo => {
      console.log(photo);
      let reader = new FileReader();
      reader.addEventListener("load", () => {
        this.blobData = reader.result;
      }, false);
      if (photo) {
        reader.readAsDataURL(photo);
      }
    })
  }

  openDialog(option: Option) {
    this.dialogContent.visible = true;
    this.dialogContent.type = option;
  }

  openWebsite(link: string) {
    window.open(link, '_blank');
  }
}
