using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class addeduseraggregatetoPerson : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "userId",
                table: "Tutors",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "userId",
                table: "Students",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "userId",
                table: "Admins",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tutors_userId",
                table: "Tutors",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_userId",
                table: "Students",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_Admins_userId",
                table: "Admins",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admins_AbpUsers_userId",
                table: "Admins",
                column: "userId",
                principalTable: "AbpUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_AbpUsers_userId",
                table: "Students",
                column: "userId",
                principalTable: "AbpUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tutors_AbpUsers_userId",
                table: "Tutors",
                column: "userId",
                principalTable: "AbpUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admins_AbpUsers_userId",
                table: "Admins");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_AbpUsers_userId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Tutors_AbpUsers_userId",
                table: "Tutors");

            migrationBuilder.DropIndex(
                name: "IX_Tutors_userId",
                table: "Tutors");

            migrationBuilder.DropIndex(
                name: "IX_Students_userId",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Admins_userId",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Admins");
        }
    }
}
