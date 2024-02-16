using Codesaurs.Models;
using DefaultNamespace;
using Microsoft.EntityFrameworkCore;
using WebApplication4.Configurations;
using WebApplication4.Models;

namespace WebApplication4.DB;

public class CodesaurusDbContext : DbContext
{
    public DbSet<Course> Courses { get; set; }
    public DbSet<StudentCourse> StudentCourses { get; set; }
    public DbSet<Attendance> Attendances { get; set; }
    public DbSet<Student> Students { get; set; }
    public CodesaurusDbContext(DbContextOptions<CodesaurusDbContext> options) : base(options)
    {
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new StudentConfiguration());
        modelBuilder.ApplyConfiguration(new CourseConfiguration());
        modelBuilder.ApplyConfiguration(new StudentCourseConfiguration());
        base.OnModelCreating(modelBuilder);
    }
}