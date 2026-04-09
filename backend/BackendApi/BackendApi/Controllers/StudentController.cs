using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        [HttpGet]
        public IActionResult GetStudents()
        {
            var students = new List<Models.Student>
            {
                new Models.Student { Id = 1, Name = "Alice", Course = "Mathematics" },
                new Models.Student { Id = 2, Name = "Bob", Course = "Physics" },
                new Models.Student { Id = 3, Name = "Charlie", Course = "Chemistry" }
            };
            return Ok(students);
        }
    }
}
