using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class changevariables : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.RenameColumn(
                name: "username",
                table: "Tutors",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Tutors",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "surname",
                table: "Tutors",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "subjects",
                table: "Tutors",
                newName: "Subjects");

            migrationBuilder.RenameColumn(
                name: "profileImage",
                table: "Tutors",
                newName: "ProfileImage");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Tutors",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Tutors",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "grades",
                table: "Tutors",
                newName: "Grades");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Tutors",
                newName: "Email");

            migrationBuilder.RenameIndex(
                name: "IX_Tutors_userId",
                table: "Tutors",
                newName: "IX_Tutors_UserId");

            migrationBuilder.RenameColumn(
                name: "username",
                table: "Students",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Students",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "surname",
                table: "Students",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "subjects",
                table: "Students",
                newName: "Subjects");

            migrationBuilder.RenameColumn(
                name: "profileImage",
                table: "Students",
                newName: "ProfileImage");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Students",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Students",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "grade",
                table: "Students",
                newName: "Grade");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Students",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "about",
                table: "Students",
                newName: "About");

            migrationBuilder.RenameIndex(
                name: "IX_Students_userId",
                table: "Students",
                newName: "IX_Students_UserId");

            migrationBuilder.RenameColumn(
                name: "username",
                table: "Admins",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "Admins",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "surname",
                table: "Admins",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "profileImage",
                table: "Admins",
                newName: "ProfileImage");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Admins",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Admins",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Admins",
                newName: "Email");

            migrationBuilder.RenameIndex(
                name: "IX_Admins_userId",
                table: "Admins",
                newName: "IX_Admins_UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admins_AbpUsers_UserId",
                table: "Admins",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_AbpUsers_UserId",
                table: "Students",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tutors_AbpUsers_UserId",
                table: "Tutors",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admins_AbpUsers_UserId",
                table: "Admins");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_AbpUsers_UserId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Tutors_AbpUsers_UserId",
                table: "Tutors");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Tutors",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Tutors",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Tutors",
                newName: "surname");

            migrationBuilder.RenameColumn(
                name: "Subjects",
                table: "Tutors",
                newName: "subjects");

            migrationBuilder.RenameColumn(
                name: "ProfileImage",
                table: "Tutors",
                newName: "profileImage");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Tutors",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Tutors",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Grades",
                table: "Tutors",
                newName: "grades");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Tutors",
                newName: "email");

            migrationBuilder.RenameIndex(
                name: "IX_Tutors_UserId",
                table: "Tutors",
                newName: "IX_Tutors_userId");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Students",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Students",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Students",
                newName: "surname");

            migrationBuilder.RenameColumn(
                name: "Subjects",
                table: "Students",
                newName: "subjects");

            migrationBuilder.RenameColumn(
                name: "ProfileImage",
                table: "Students",
                newName: "profileImage");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Students",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Students",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Grade",
                table: "Students",
                newName: "grade");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Students",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "About",
                table: "Students",
                newName: "about");

            migrationBuilder.RenameIndex(
                name: "IX_Students_UserId",
                table: "Students",
                newName: "IX_Students_userId");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Admins",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Admins",
                newName: "userId");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Admins",
                newName: "surname");

            migrationBuilder.RenameColumn(
                name: "ProfileImage",
                table: "Admins",
                newName: "profileImage");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Admins",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Admins",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Admins",
                newName: "email");

            migrationBuilder.RenameIndex(
                name: "IX_Admins_UserId",
                table: "Admins",
                newName: "IX_Admins_userId");

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
    }
}
