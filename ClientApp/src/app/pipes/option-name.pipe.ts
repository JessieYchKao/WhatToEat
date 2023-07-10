import { Pipe, PipeTransform } from '@angular/core';
import { MainCategory, Country, FoodType, PriceRange, ServeType, OtherOptions, OptionType, ChoiceCheckbox } from '../interface/option';

@Pipe({
  name: 'optionName',
  pure: false
})
export class OptionNamePipe implements PipeTransform {

  transform(choice: ChoiceCheckbox, type: OptionType): string {
    if (!choice.isChecked) {
      return '';
    }
    return choice.choice === OtherOptions.all ? 'all' : `options.${type}.${choice.choice}`;
  }

}
