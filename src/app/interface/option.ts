export interface Option {
    name?: string;
    type: OptionType;
    choice: ChoiceCheckbox[];
}

export interface GeneratorPara {
    type: OptionType;
    choice: (MainCategory | Country | FoodType | PriceRange | ServeType | OtherOptions | OtherOptions | string)[];
}

export interface ChoiceCheckbox {
  choice: MainCategory | Country | FoodType | PriceRange | ServeType | OtherOptions | string;
  isChecked: boolean;
}

export enum OptionType {
    /**main category: drink, breakfast, brunch, lunch, dinner, afternoon snacks, bedtime snacks, ... */
    mainCategory = 1,
    /**country: chinese, korean, japanese, thailand, ... */
    country,
    /**food type: (based on different main category) */
    foodType,
    /**price range */
    priceRange,
    /**serve type: eat there or to go */
    serveType,
}

export enum OtherOptions {
    all = 0
}

// Multiple choices
export enum MainCategory {
    drink = 1,
    breakfast = 2,
    brunch = 3,
    lunch = 4,
    dinner = 5,
    afternoon = 6,
    bedtime = 7
}

// Single Choice
export enum Country {
    chinese = 1,
    korean,
    japanese,
    thailand,
    usa,
    italian,
    maxico
}

// Single Choice
export enum FoodType {
    /**drink */
    tea = 1,
    /**drink */
    coffee,
    /**drink */
    alcohol,
    /**afternoon、bedtime */
    sweet,
    /**brunch、lunch、dinner、bedtime */
    healthy,
    /**brunch、lunch、dinner、bedtime */
    rice,
    /**brunch、lunch、dinner、bedtime */
    noodles,
    /**brunch、lunch、dinner、bedtime */
    salad,
    /**brunch、lunch、dinner、bedtime */
    burger,
    /**brunch、lunch、dinner、bedtime */
    pizza,
    /**brunch、lunch、dinner、bedtime */
    soup,
    /**brunch、lunch、dinner、bedtime */
    fried,
    /**lunch、dinner*/
    hotpot
}

// Single Choice
export enum PriceRange {
    low = 1,
    middle = 2,
    high = 3
}

// Single Choice
export enum ServeType {
    forHere = 1,
    toGo
}
