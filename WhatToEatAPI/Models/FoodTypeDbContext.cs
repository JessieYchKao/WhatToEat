using Microsoft.EntityFrameworkCore;

namespace WhatToEatAPI.Models
{
    public class FoodTypeDbContext : DbContext
    {
        public FoodTypeDbContext(DbContextOptions<FoodTypeDbContext> options) : base(options) { }

        public DbSet<FoodType> FoodType { get; set; }
    }
}
