using WebApplication4.Models;

namespace WebApplication4.Services.Abstractions;

public interface IStudentService
{
    public Task<List<Student>> GetAll();
    public Task<Student?> GetById(int id);
    public Task<Student> GetByEmail(String email);
    public Task Add(Student student);
    public Task Update(int id, string firstName, string lastName, DateTime birthDate, string gender, string phoneNumber, string email,
        string profileImageUrl,
        string parentFullName, string parentContact);
    public Task Delete(int id);
}