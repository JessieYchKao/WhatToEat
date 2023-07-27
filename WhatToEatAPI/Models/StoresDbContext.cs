using Microsoft.EntityFrameworkCore;

namespace WhatToEatAPI.Models
{
    public class StoresDbContext : DbContext
    {
        public StoresDbContext(DbContextOptions<StoresDbContext> options) : base(options) { }

        public DbSet<Stores> Stores { get; set; }
    }
}
