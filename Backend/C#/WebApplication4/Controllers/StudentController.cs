using Microsoft.AspNetCore.Mvc;
using Codesaurs.Models;
using WebApplication4.Models;
using WebApplication4.Services.Abstractions;

[ApiController]
[Route("[controller]")]
public class StudentController : Controller
{
    private readonly IStudentService _studentService;
    public StudentController(IStudentService studentService)
    {
        _studentService = studentService;
    }

    [HttpGet("students")]
    public async Task<IActionResult> GetAllStudents()
    {
        var students = await _studentService.GetAll();
        return Ok(students);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetStudent(int id)
    {
        var student = await _studentService.GetById(id);
        if (student == null)
        {
            return NotFound();
        }
        return Ok(student);
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddStudent(string firstName, string lastName, DateTime birthDate, string gender, string email, string phoneNumber, string profileImageUrl,
        string parentFullName,
        string parentContact)
    {
        var students = await _studentService.GetAll();
        var id = students.Count + 1;
        var student = new Student(id, firstName, lastName, birthDate, gender, email, phoneNumber, profileImageUrl, parentFullName, parentContact);
        await _studentService.Add(student);
        return await GetStudent(student.Id);
    }
    
    [HttpPut("update")]
    public async Task<IActionResult> UpdateStudent([FromBody] Student student)
    {
        await _studentService.Update(student.Id, student.FirstName, student.LastName, student.BirthDate, student.Gender, student.PhoneNumber, student.Email,
            student.ProfileImageUrl, student.ParentFullName, student.ParentContact);
        return NoContent();
    }
    
    [HttpDelete("delete")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
        await _studentService.Delete(id);
        return NoContent();
    }

}