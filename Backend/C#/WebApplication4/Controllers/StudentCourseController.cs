using Microsoft.AspNetCore.Mvc;
using WebApplication4.Services.Abstractions;

namespace WebApplication4.Controllers;


public class StudentCourseController : Controller
{
    private readonly IStudentCourseService _studentCourseService;

    public StudentCourseController(IStudentCourseService studentCourseService)
    {
        _studentCourseService = studentCourseService;
    }

    [HttpPost("enroll")]
    public async Task<IActionResult> EnrollStudentInCourse(int studentId, int courseId)
    {
        await _studentCourseService.EnrollStudentInCourse(studentId, courseId);
        return NoContent();
    }

    [HttpPost("attendance")]
    public async Task<IActionResult> AddAttendance(int studentId, int courseId)
    {
        await _studentCourseService.AddAttendance(studentId, courseId);
        return NoContent();
    }

    [HttpGet("progress")]
    public async Task<IActionResult> GetStudentCourseProgress(int studentId, int courseId)
    {
        var progress = await _studentCourseService.GetStudentCourseProgress(studentId, courseId);
        if (progress == null)
        {
            return NotFound(); 
        }
        return Ok(progress); 
    }
}