using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WhatToEatAPI.Models
{
    public class Stores
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("name")]
        public string Name { get; set; }
        [Column("place_id")]
        public string PlaceId { get; set; }
        [Column("country_id")]
        public int CountryId { get; set; }
        [Column("price_range")]
        public int PriceRange { get; set; }
        [Column("serve_type_id")]
        public int ServeTypeId { get; set; }
        [Column("memo")]
        public string Memo { get; set; }
    }
    public class StoreDetail
    {
        public List<string> PhotoReferences { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Name { get; set; }
        public string PriceLevel { get; set; }
        public string Rating { get; set; }
        public string Website { get; set; }
    }
}
