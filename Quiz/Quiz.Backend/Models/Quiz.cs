using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Quiz.Backend.Models
{
    public class Quiz
    {
        public int id { get; set; }
        public string Title { get; set; }
        public string OwnerId { get; set; }
    }
}
