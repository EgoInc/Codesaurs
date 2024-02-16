using WebApplication1.Models;

namespace WebApplication4.Services.Abstractions;

public interface IStudentCourseService
{
    Task EnrollStudentInCourse(int studentId, int courseId);
    Task AddAttendance(int studentId, int courseId);
    Task<StudentCourseProgress> GetStudentCourseProgress(int studentId, int courseId);
}