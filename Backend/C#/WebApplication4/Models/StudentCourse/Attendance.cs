using Codesaurs.Models;
using WebApplication4.Models;

namespace Codesaurs.Models;

public class Attendance
{
    public int Id { get; set; } 
    public int StudentId { get; set; } 
    public int CourseId { get; set; } 
    public DateTime VisitDate { get; set; } 
    
    public Student Student { get; set; } 
    public Course Course { get; set; } 
}