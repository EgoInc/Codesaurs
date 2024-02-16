using Codesaurs.Models;
using DefaultNamespace;

namespace WebApplication4.Repositories.Abstractions;

public interface IStudentCourseRepository
{
    Task<StudentCourse> GetById(int id);
    Task<IEnumerable<StudentCourse>> GetAll();
    Task Add(StudentCourse studentCourse);
    Task Update(StudentCourse studentCourse);
    Task Delete(int id);
    Task AddAttendance(Attendance attendance);
    Task<StudentCourse> GetByStudentAndCourseId(int studentId, int courseId);
}