using WhatToEatAPI.Models;

namespace WhatToEatAPI.Services
{
    public interface IRandomService
    {
        Store GetStores(RandomPara[] para);
    }
}
