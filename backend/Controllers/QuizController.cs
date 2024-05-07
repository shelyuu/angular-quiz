using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [EnableCors("_AllowSpecificOrigins")]
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        // POST api/<ValuesController>
        [HttpPost]
        public void Post([FromBody] Models.Quiz quizText)
        {

        }
    }
}
