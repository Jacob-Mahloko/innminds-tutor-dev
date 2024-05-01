using System.Threading.Tasks;
using innminds-api.Models.TokenAuth;
using innminds-api.Web.Controllers;
using Shouldly;
using Xunit;

namespace innminds-api.Web.Tests.Controllers
{
    public class HomeController_Tests: innminds-apiWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}