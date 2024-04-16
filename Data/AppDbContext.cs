using FMCP_.Models;
using FMCP_.Models.RegDto;
using Microsoft.EntityFrameworkCore;
using static Microsoft.AspNetCore.Razor.Language.TagHelperMetadata;

namespace FMCP_.Data
{
    public class AppDbContext1 : DbContext
    {
        //constructure creation and passing it to base class as well
        public AppDbContext1(DbContextOptions<AppDbContext1> options) : base(options)
        {

        }


       
    }

    // DbContext for the second database
    public class AppDbContext2 : DbContext
    {
        public AppDbContext2(DbContextOptions<AppDbContext2> options) : base(options)
        {
        }
        public DbSet<LeeseDetail> LeeseDetail { get; set; }
        // DbSet properties and other configurations for the second database
    }
}







        ////here C
        //public DbSet<Coupon> Coupons { get; set; }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    modelBuilder.Entity<Coupon>().HasData(
        //        new Coupon
        //        {
        //            CouponId = 1,
        //            CouponCode = "100FF",
        //            DiscountAmount = 10,
        //            MinAmount = 20
        //        });
        //    modelBuilder.Entity<Coupon>().HasData(
        //        new Coupon

        //        {
        //            CouponId = 2,
        //            CouponCode = "100HF",
        //            DiscountAmount = 20,
        //            MinAmount = 40

        //        });
        //}
    

