using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz.Backend.Contexts;
using Quiz.Backend.Models;

namespace Quiz.Backend.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        public readonly QuizContext _context = null;
        public QuestionController(QuizContext context)
        {
            this._context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Question>> Get()
        {
            return _context.Questions.ToList();
        }

        [AllowAnonymous]
        [HttpGet("{QuizId}")]
        public ActionResult<IEnumerable<Question>> Get([FromRoute] int QuizId)
        {
            return _context.Questions.Where(q=>q.QuizId == QuizId).ToList();
        }
        [HttpPost]
        public  async Task<IActionResult> Post([FromBody] Question question)
        {
            var quiz = _context.Quiz.SingleOrDefault(q => q.id == question.QuizId);
            if (quiz == null)
                return NotFound();

            _context.Questions.Add(question);
            await _context.SaveChangesAsync();
            return Ok(question);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Question value)
        {
            if (id != value.id)
                return BadRequest();
            _context.Entry(value).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return Ok(value);
        }
    }
}