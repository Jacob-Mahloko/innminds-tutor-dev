FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/innminds-api.Web.Host/innminds-api.Web.Host.csproj", "src/innminds-api.Web.Host/"]
COPY ["src/innminds-api.Web.Core/innminds-api.Web.Core.csproj", "src/innminds-api.Web.Core/"]
COPY ["src/innminds-api.Application/innminds-api.Application.csproj", "src/innminds-api.Application/"]
COPY ["src/innminds-api.Core/innminds-api.Core.csproj", "src/innminds-api.Core/"]
COPY ["src/innminds-api.EntityFrameworkCore/innminds-api.EntityFrameworkCore.csproj", "src/innminds-api.EntityFrameworkCore/"]
WORKDIR "/src/src/innminds-api.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/innminds-api.Web.Host", "src/innminds-api.Web.Host"]
COPY ["src/innminds-api.Web.Core", "src/innminds-api.Web.Core"]
COPY ["src/innminds-api.Application", "src/innminds-api.Application"]
COPY ["src/innminds-api.Core", "src/innminds-api.Core"]
COPY ["src/innminds-api.EntityFrameworkCore", "src/innminds-api.EntityFrameworkCore"]
WORKDIR "/src/src/innminds-api.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "innminds-api.Web.Host.dll"]
