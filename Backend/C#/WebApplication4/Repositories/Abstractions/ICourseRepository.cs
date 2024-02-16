using Codesaurs.Models;

namespace Codesaurs.Repositories.Abstraction;

public interface ICourseRepository
{
    Task<Course> GetCourseByIdAsync(int courseId);
    Task<List<Course>> GetCoursesAsync(string sortBy, string language, int amount, string difficulty, decimal? duration, decimal? minPrice, decimal? maxPrice);
    Task<int> AddCourseAsync(Course course);
}