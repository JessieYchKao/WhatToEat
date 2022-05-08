export interface Option {
    name?: string;
    type: OptionType;
    choice: MainCategory | Country | FoodCategory | PriceRange | ServeType | OtherOptions;
}

export enum OptionType {
    /**main category: drink, breakfast, brunch, lunch, dinner, afternoon snacks, bedtime snacks, ... */
    mainCategory = 'mainCategory',
    /**country: chinese, korean, japanese, thailand, ... */
    country = 'country',
    /**food category: (based on different main category) */
    foodCategory = 'foodCategory',
    /**price range */
    priceRange = 'priceRange',
    /**serve type: eat there or to go */
    serveType = 'serveType',
}

export enum OtherOptions {
    all = ''
}

export enum MainCategory {
    drink = 'drink',
    breakfast = 'breakfast',
    brunch = 'brunch',
    lunch = 'lunch',
    dinner = 'dinner',
    afternoon = 'afternoon',
    bedtime = 'bedtime'
}
export enum Country {
    chinese = 'chinese', 
    korean = 'korean', 
    japanese = 'japanese', 
    thailand = 'thailand',
    us = 'us',
    italian = 'italian',
    maxico = 'maxico'
}
export enum FoodCategory {
    /**drink */
    tea = 'tea',
    /**drink */
    coffee = 'coffee',
    /**drink */
    alcohol = 'alcohol',
    /**afternoon、bedtime */
    sweet = 'sweet',
    /**afternoon、bedtime */
    savoury = 'savoury',
    /**brunch、lunch、dinner、bedtime */
    healthy = 'healthy',
    /**brunch、lunch、dinner、bedtime */
    rice = 'rice',
    /**brunch、lunch、dinner、bedtime */
    noodles = 'noodles',
    /**brunch、lunch、dinner、bedtime */
    salad = 'salad',
    /**brunch、lunch、dinner、bedtime */
    burger = 'burger',
    /**brunch、lunch、dinner、bedtime */
    pizza = 'pizza',
    /**brunch、lunch、dinner、bedtime */
    soup = 'soup',
    /**brunch、lunch、dinner、bedtime */
    fried = 'fried',
    /**lunch、dinner*/
    hotpot = 'hotpot'
}

export enum PriceRange {
    low = 'low',
    middle = 'middle',
    high = 'high'
}
export enum ServeType {
    eatThere = 'eatThere',
    toGo = 'toGo'
}