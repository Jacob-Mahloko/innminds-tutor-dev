FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/InnmindsApi.Web.Host/InnmindsApi.Web.Host.csproj", "src/InnmindsApi.Web.Host/"]
COPY ["src/InnmindsApi.Web.Core/InnmindsApi.Web.Core.csproj", "src/InnmindsApi.Web.Core/"]
COPY ["src/InnmindsApi.Application/InnmindsApi.Application.csproj", "src/InnmindsApi.Application/"]
COPY ["src/InnmindsApi.Core/InnmindsApi.Core.csproj", "src/InnmindsApi.Core/"]
COPY ["src/InnmindsApi.EntityFrameworkCore/InnmindsApi.EntityFrameworkCore.csproj", "src/InnmindsApi.EntityFrameworkCore/"]
WORKDIR "/src/src/InnmindsApi.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/InnmindsApi.Web.Host", "src/InnmindsApi.Web.Host"]
COPY ["src/InnmindsApi.Web.Core", "src/InnmindsApi.Web.Core"]
COPY ["src/InnmindsApi.Application", "src/InnmindsApi.Application"]
COPY ["src/InnmindsApi.Core", "src/InnmindsApi.Core"]
COPY ["src/InnmindsApi.EntityFrameworkCore", "src/InnmindsApi.EntityFrameworkCore"]
WORKDIR "/src/src/InnmindsApi.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "InnmindsApi.Web.Host.dll"]
