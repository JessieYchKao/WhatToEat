using WhatToEatAPI.Models;

namespace WhatToEatAPI.Services
{
    public interface IRandomService
    {
        Stores GetStores(RandomPara[] para);
    }
}
