using Swashbuckle.AspNetCore.SwaggerGen;
using System.Net;
using Microsoft.Data.SqlClient;
using System.Reflection;
using WhatToEatAPI.Models;
using Microsoft.EntityFrameworkCore;
using WhatToEatAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Connect to Azure SQL Server
var connectionString = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
// Db Context
builder.Services.AddDbContext<StoreDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDbContext<OptionTypeDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDbContext<FoodTypeDbContext>(options =>
    options.UseSqlServer(connectionString));
builder.Services.AddDbContext<CategoryDbContext>(options =>
    options.UseSqlServer(connectionString));


// DI
builder.Services.AddScoped<IRandomService, RandomService>();
builder.Services.AddScoped<IGoogleMapService, GoogleMapService>();

// Middleware
//CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:4200").AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
