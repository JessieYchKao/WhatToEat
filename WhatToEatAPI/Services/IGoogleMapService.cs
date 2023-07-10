using WhatToEatAPI.Models;

namespace WhatToEatAPI.Services
{
    public interface IGoogleMapService
    {
        StoreDetail GetDetailByPlaceId(string placeId);

        string GetPhotoByReference(string reference);
    }
}
