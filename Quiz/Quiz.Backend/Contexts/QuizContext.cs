using Microsoft.EntityFrameworkCore;
using Quiz.Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Backend.Contexts
{
    public class QuizContext:DbContext
    {
        public QuizContext(DbContextOptions<QuizContext> options):base(options)
        {

        }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Quiz.Backend.Models.Quiz> Quiz { get; set; }
    }
}
