using AutoMapper;
using Microsoft.EntityFrameworkCore;
using FMCP_.Data;
using FMCP_.Models;
using FMCP_.Services.IService;
using FMCP_.Services;
using AutoMapper;
using FMCP_;
using System.Configuration;






var builder = WebApplication.CreateBuilder(args);
//get connection string Appsetting and add it
builder.Services.AddDbContext<AppDbContext1>
    (options => options.UseMySQL(builder.Configuration.GetConnectionString("DefaultConnection")));
// Configure the second DbContext

builder.Services.AddDbContext<AppDbContext2>
    (options => options.UseMySQL(builder.Configuration.GetConnectionString("SecondDatabaseConnection")));


//add mapper
IMapper mapper = MappingConfig.RegisterMaps().CreateMapper();
builder.Services.AddSingleton(mapper);
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddScoped<IGeneralInfoServive, GeneralInfoService>();
var app = builder.Build();



// Configure the HTTP request pipeline.here

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
