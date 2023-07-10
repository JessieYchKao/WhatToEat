using Microsoft.EntityFrameworkCore;

namespace WhatToEatAPI.Models
{
    public class StoreDbContext : DbContext
    {
        public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options) { }

        public DbSet<Store> Store { get; set; }
    }
}
