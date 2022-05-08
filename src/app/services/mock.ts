import { Country, FoodCategory, MainCategory, Option, OptionType, PriceRange, ServeType } from "../interface/option";


export const MockData: Option[] = [
    {
        type: OptionType.mainCategory,
        choice: MainCategory.lunch
    },
    {
        type: OptionType.foodCategory,
        choice: FoodCategory.salad
    },
    {
        type: OptionType.country,
        choice: Country.us
    },
    {
        type: OptionType.priceRange,
        choice: PriceRange.middle
    },
    {
        type: OptionType.serveType,
        choice: ServeType.eatThere
    },
    {
        type: OptionType.serveType,
        choice: ServeType.eatThere
    },
    {
        type: OptionType.serveType,
        choice: ServeType.eatThere
    },
    {
        type: OptionType.priceRange,
        choice: PriceRange.middle
    },
    {
        type: OptionType.serveType,
        choice: ServeType.eatThere
    },
    {
        type: OptionType.serveType,
        choice: ServeType.eatThere
    },
    {
        type: OptionType.serveType,
        choice: ServeType.eatThere
    },
];
