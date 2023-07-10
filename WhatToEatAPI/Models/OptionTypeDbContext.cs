using Microsoft.EntityFrameworkCore;

namespace WhatToEatAPI.Models
{
    public class OptionTypeDbContext : DbContext
    {
        public OptionTypeDbContext(DbContextOptions<OptionTypeDbContext> options) : base(options) { }

        public DbSet<OptionType> OptionType { get; set; }
    }
}
