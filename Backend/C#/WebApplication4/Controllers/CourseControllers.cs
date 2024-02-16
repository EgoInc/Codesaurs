using Microsoft.AspNetCore.Mvc;
using Codesaurs.Models;
using WebApplication4.Services.Abstractions;

namespace Codesaurs.Controllers
{
    [ApiController]
    [Route("courses")]
    public class CoursesController : Controller
    {
        private readonly ICourseService _courseService;

        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCourses()
        {
            var courses = await _courseService.GetAllCourses();

            if (courses == null)
            {
                return NotFound("Not found");
            }
            
            return Ok(courses);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourse(int id)
        {
            var course = await _courseService.GetCourseByIdAsync(id);
            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }

        [HttpGet("sorted")]
        public async Task<IActionResult> SortedCourses(string sortBy = "views", string language = "", int amount = 10,
            string difficulty = "", int? duration = null, decimal? minPrice = null, decimal? maxPrice = null)
        {
            var courses = await _courseService.GetCoursesAsync(sortBy, language, amount, difficulty, duration, minPrice, maxPrice);
            return Ok(courses);
        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchCourses(string query, string sortBy = "", string language = "", int amount = 10, string difficulty = "", int? duration = null, decimal? minPrice = null, decimal? maxPrice = null)
        {
            var courses = await _courseService.GetCoursesAsync(sortBy, language, amount, difficulty, duration, minPrice, maxPrice);

            // Если параметр запроса query не пустой, фильтруем список курсов по запросу
            if (!string.IsNullOrEmpty(query))
            {
                courses = courses.Where(c => c.Name.Contains(query)).ToList();
            }

            // Возвращаем отфильтрованный список курсов
            return Ok(courses);
        }

        [HttpPost("/asdasdasd")]
        public async Task<IActionResult> AddCourse([FromBody] Course course)
        {
            if (!ModelState.IsValid)
            {
                // Возвращаем ошибку в случае невалидных данных
                return BadRequest(ModelState);
            }

            var courseId = await _courseService.AddCourseAsync(course);
            // Возвращаем созданный курс с кодом 201 Created
            return CreatedAtAction(nameof(GetCourse), new { id = courseId }, course);
        }
    }
}
