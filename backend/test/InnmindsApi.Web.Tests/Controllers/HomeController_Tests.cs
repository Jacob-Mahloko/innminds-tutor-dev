using System.Threading.Tasks;
using InnmindsApi.Models.TokenAuth;
using InnmindsApi.Web.Controllers;
using Shouldly;
using Xunit;

namespace InnmindsApi.Web.Tests.Controllers
{
    public class HomeController_Tests: InnmindsApiWebTestBase
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