using Microsoft.EntityFrameworkCore;
using System;
using WhatToEatAPI.Models;

namespace WhatToEatAPI.Services
{
    public class RandomService : IRandomService
    {
        private readonly StoresDbContext _storeDbContext;
        private readonly OptionTypeDbContext _optionTypeDbContext;
        private readonly CategoryDbContext _categoryDbContext;
        private readonly FoodTypeDbContext _foodtypeDbContext;
        public RandomService(StoresDbContext storeDbContext, OptionTypeDbContext optionTypeDbContext, CategoryDbContext categoryDbContext, FoodTypeDbContext foodtypeDbContext)
        {
            _storeDbContext = storeDbContext;
            _optionTypeDbContext = optionTypeDbContext;
            _categoryDbContext = categoryDbContext;
            _foodtypeDbContext = foodtypeDbContext;
        }

        public Stores GetStores(RandomPara[] para)
        {
            IQueryable<Stores> storeData = _storeDbContext.Stores;
            List<OptionType> optionTypes = _optionTypeDbContext.OptionType.ToList();
            foreach (var option in para)
            {
                string typeName = optionTypes.Where(x => x.TypeId == option.Type).Select(x => x.TypeName).FirstOrDefault().ToString();
                if (option.Choice.Count() > 0 )
                {
                    switch (typeName)
                    {
                        case "Main Category":
                            var catData = (from x in _categoryDbContext.Category where option.Choice.Contains(x.CatId) select x.Id).Distinct().ToList();
                            storeData = from x in storeData where catData.Contains(x.Id) select x;
                            break;
                        case "Country":
                            storeData = from x in storeData where option.Choice.Contains(x.CountryId) select x;
                            break;
                        case "Food Type":
                            var foodData = (from x in _foodtypeDbContext.FoodType where option.Choice.Contains(x.TypeId) select x.Id).Distinct().ToList();
                            storeData = from x in storeData where foodData.Contains(x.Id) select x;
                            break;
                        case "Price Range":
                            storeData = from x in storeData where option.Choice.Contains(x.PriceRange) select x;
                            break;
                        case "Serve Type":
                            int serveTypeId = option.Choice.Count > 1 ? 3 : option.Choice[0];
                            storeData = from x in storeData where serveTypeId == x.ServeTypeId select x;
                            break;
                    }
                }
            }
            List<Stores> result = storeData.ToList();
            var randomResult = from r in result orderby Guid.NewGuid() ascending select r;
            return randomResult.ToList()[0];
        }
    }
}
