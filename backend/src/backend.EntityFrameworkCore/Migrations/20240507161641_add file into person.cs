using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class addfileintoperson : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "ImageId",
                table: "Tutors",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ImageId",
                table: "Students",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ImageId",
                table: "Admins",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Tutors_ImageId",
                table: "Tutors",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_Students_ImageId",
                table: "Students",
                column: "ImageId");

            migrationBuilder.CreateIndex(
                name: "IX_Admins_ImageId",
                table: "Admins",
                column: "ImageId");

            migrationBuilder.AddForeignKey(
                name: "FK_Admins_StoredFiles_ImageId",
                table: "Admins",
                column: "ImageId",
                principalTable: "StoredFiles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Students_StoredFiles_ImageId",
                table: "Students",
                column: "ImageId",
                principalTable: "StoredFiles",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Tutors_StoredFiles_ImageId",
                table: "Tutors",
                column: "ImageId",
                principalTable: "StoredFiles",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Admins_StoredFiles_ImageId",
                table: "Admins");

            migrationBuilder.DropForeignKey(
                name: "FK_Students_StoredFiles_ImageId",
                table: "Students");

            migrationBuilder.DropForeignKey(
                name: "FK_Tutors_StoredFiles_ImageId",
                table: "Tutors");

            migrationBuilder.DropIndex(
                name: "IX_Tutors_ImageId",
                table: "Tutors");

            migrationBuilder.DropIndex(
                name: "IX_Students_ImageId",
                table: "Students");

            migrationBuilder.DropIndex(
                name: "IX_Admins_ImageId",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Tutors");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Students");

            migrationBuilder.DropColumn(
                name: "ImageId",
                table: "Admins");
        }
    }
}
