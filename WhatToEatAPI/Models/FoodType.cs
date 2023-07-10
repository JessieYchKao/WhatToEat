using System.ComponentModel.DataAnnotations.Schema;

namespace WhatToEatAPI.Models
{
    public class FoodType
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("type_id")]
        public int TypeId { get; set; }
    }
}
