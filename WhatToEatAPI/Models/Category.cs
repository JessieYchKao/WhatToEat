using System.ComponentModel.DataAnnotations.Schema;

namespace WhatToEatAPI.Models
{
    public class Category
    {
        [Column("id")]
        public int Id { get; set; }
        [Column("cat_id")]
        public int CatId { get; set; }

    }
}
