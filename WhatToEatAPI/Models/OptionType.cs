using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WhatToEatAPI.Models
{
    public class OptionType
    {
        [Key]
        [Column("type_id")]
        public int TypeId { get; set; }
        [Column("name")]
        public string TypeName { get; set; }

    }
}
