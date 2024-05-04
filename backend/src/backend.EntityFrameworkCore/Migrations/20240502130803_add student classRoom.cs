using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class addstudentclassRoom : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ClassRooms_Students_StudentId",
                table: "ClassRooms");

            migrationBuilder.DropIndex(
                name: "IX_ClassRooms_StudentId",
                table: "ClassRooms");

            migrationBuilder.DropColumn(
                name: "StudentId",
                table: "ClassRooms");

            migrationBuilder.CreateTable(
                name: "StudentClassRooms",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StudentId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ClassRoomId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentClassRooms", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StudentClassRooms_ClassRooms_ClassRoomId",
                        column: x => x.ClassRoomId,
                        principalTable: "ClassRooms",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_StudentClassRooms_Students_StudentId",
                        column: x => x.StudentId,
                        principalTable: "Students",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_StudentClassRooms_ClassRoomId",
                table: "StudentClassRooms",
                column: "ClassRoomId");

            migrationBuilder.CreateIndex(
                name: "IX_StudentClassRooms_StudentId",
                table: "StudentClassRooms",
                column: "StudentId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentClassRooms");

            migrationBuilder.AddColumn<Guid>(
                name: "StudentId",
                table: "ClassRooms",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ClassRooms_StudentId",
                table: "ClassRooms",
                column: "StudentId");

            migrationBuilder.AddForeignKey(
                name: "FK_ClassRooms_Students_StudentId",
                table: "ClassRooms",
                column: "StudentId",
                principalTable: "Students",
                principalColumn: "Id");
        }
    }
}
