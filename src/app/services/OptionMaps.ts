import { Country, FoodType, MainCategory, Option, OptionType, OtherOptions, PriceRange, ServeType } from "../interface/option";


export const OptionMaps = new Map<string,string[]>([
  [OptionType[1], Object.keys(OtherOptions).concat(Object.keys(MainCategory))],
  [OptionType[2], Object.keys(OtherOptions).concat(Object.keys(FoodType))],
  [OptionType[3], Object.keys(OtherOptions).concat(Object.keys(Country))],
  [OptionType[4],  Object.keys(OtherOptions).concat(Object.keys(PriceRange))],
  [OptionType[5], Object.keys(OtherOptions).concat(Object.keys(ServeType))]
]);

