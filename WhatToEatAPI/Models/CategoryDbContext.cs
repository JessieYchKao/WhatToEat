using Microsoft.EntityFrameworkCore;

namespace WhatToEatAPI.Models
{
    public class CategoryDbContext : DbContext
    {
        public CategoryDbContext(DbContextOptions<CategoryDbContext> options) : base(options) { }

        public DbSet<Category> Category { get; set; }
    }
}
