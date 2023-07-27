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
string connectionString = builder.Configuration.GetConnectionString("MYSQL_CONNECTION_STRING");
// Db Context
builder.Services.AddDbContext<StoresDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddDbContext<OptionTypeDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddDbContext<FoodTypeDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddDbContext<CategoryDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));


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
        builder.WithOrigins("http://192.168.1.244:4200").AllowAnyHeader();
        //builder.AllowAnyOrigin().AllowAnyHeader();
    });
});

builder.WebHost.UseUrls("http://192.168.1.244:5000");

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
