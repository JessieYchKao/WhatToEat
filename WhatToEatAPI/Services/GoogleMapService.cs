using Newtonsoft.Json;
using System.Data;
using System.Net;
using System.Net.Http.Headers;
using System.Xml.Linq;
using WhatToEatAPI.Models;

namespace WhatToEatAPI.Services
{
    public class GoogleMapService : IGoogleMapService
    {
        private readonly IConfiguration _configuration;
        public GoogleMapService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public StoreDetail GetDetailByPlaceId(string placeId)
        {
            StoreDetail result = new StoreDetail();
            string googlemapkey = _configuration["GoogleMap:Key"];
            string MapUrl = String.Format("https://maps.googleapis.com/maps/api/place/details/xml?");

            string url = MapUrl + "place_id={0}&key={1}";
            url = string.Format(url, placeId, googlemapkey);

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));
                HttpResponseMessage response = client.GetAsync(url).Result;

                if (response.StatusCode == HttpStatusCode.OK)
                {
                    XDocument xdoc = XDocument.Parse(response.Content.ReadAsStringAsync().Result);

                    StringReader sr = new StringReader(xdoc.ToString());

                    DataSet ds = new DataSet();

                    ds.ReadXml(sr);
                    result.Address = xdoc.Root.Element("result").Element("formatted_address") != null ? xdoc.Root.Element("result").Element("formatted_address").Value : "";
                    result.Phone = xdoc.Root.Element("result").Element("formatted_phone_number") != null ? xdoc.Root.Element("result").Element("formatted_phone_number").Value : "";
                    result.Name = xdoc.Root.Element("result").Element("name") != null ? xdoc.Root.Element("result").Element("name").Value : "";
                    result.PriceLevel = xdoc.Root.Element("result").Element("price_level") != null ? xdoc.Root.Element("result").Element("price_level").Value : "";
                    result.Rating = xdoc.Root.Element("result").Element("rating") != null ? xdoc.Root.Element("result").Element("rating").Value : "";
                    result.Website = xdoc.Root.Element("result").Element("website") != null ? xdoc.Root.Element("result").Element("website").Value : "";
                    result.PhotoReferences = xdoc.Root.Element("result").Element("website") != null ? xdoc.Root.Element("result").Elements("photo").Select(x => "https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photo_reference=" + x.Element("photo_reference").Value + "&key=" + googlemapkey).ToList() : new List<string>();

                }
            }
            return result;
        }

        public string GetPhotoByReference(string reference)
        {
            string result = "";
            string googlemapkey = _configuration["GoogleMap:Key"];
            string MapUrl = String.Format("https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&");

            string url = MapUrl + "photo_reference={0}&key={1}";
            url = string.Format(url, reference, googlemapkey);

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/xml"));
                HttpResponseMessage response = client.GetAsync(url).Result;

                if (response.StatusCode == HttpStatusCode.OK)
                {
                    result = response.Content.ReadAsStringAsync().Result;
                    

                }
            }
            return result;
        }
    }

}
