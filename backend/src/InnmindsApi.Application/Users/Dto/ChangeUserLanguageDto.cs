using System.ComponentModel.DataAnnotations;

namespace InnmindsApi.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}