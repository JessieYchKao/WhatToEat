using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Text.Json.Serialization;
using WhatToEatAPI.Models;
using WhatToEatAPI.Services;

namespace WhatToEatAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RandomController : ControllerBase
    {
        private readonly ILogger<RandomController> _logger;
        private readonly IRandomService _randomService;
        private readonly IGoogleMapService _googleMapService;

        public RandomController(ILogger<RandomController> logger, IRandomService randomService, IGoogleMapService googleMapService)
        {
            _logger = logger;
            _randomService = randomService;
            _googleMapService = googleMapService;
        }

        [HttpPost]
        public StoreDetail GetRandom(RandomPara[] para)
        {
            var x = _randomService.GetStores(para);
            return _googleMapService.GetDetailByPlaceId(x.PlaceId);
        }

        [HttpGet("photo")]
        public string GetPhoto(string reference)
        {
            return _googleMapService.GetPhotoByReference(reference);
        }
    }
}