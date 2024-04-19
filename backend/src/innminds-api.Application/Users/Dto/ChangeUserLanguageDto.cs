using System.ComponentModel.DataAnnotations;

namespace innminds-api.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}