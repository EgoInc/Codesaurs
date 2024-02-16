using Codesaurs.Models;

namespace WebApplication4.Services.Abstractions;

public interface ICourseService
{
    public Task<List<Course>> GetAllCourses();
    public Task<Course> GetCourseByIdAsync(int courseId);
    public Task<int> AddCourseAsync(Course course);
    public Task<List<Course>> GetCoursesAsync(string sortBy, string language, int amount, string difficulty, decimal? duration, decimal? minPrice, decimal? maxPrice);
}