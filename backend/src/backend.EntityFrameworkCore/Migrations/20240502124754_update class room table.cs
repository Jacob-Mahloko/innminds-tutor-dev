using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class updateclassroomtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClassRoomStudent");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "ClassRoomStudent",
                columns: table => new
                {
                    ClassRoomsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StudentsId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClassRoomStudent", x => new { x.ClassRoomsId, x.StudentsId });
                    table.ForeignKey(
                        name: "FK_ClassRoomStudent_ClassRooms_ClassRoomsId",
                        column: x => x.ClassRoomsId,
                        principalTable: "ClassRooms",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ClassRoomStudent_Students_StudentsId",
                        column: x => x.StudentsId,
                        principalTable: "Students",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClassRoomStudent_StudentsId",
                table: "ClassRoomStudent",
                column: "StudentsId");
        }
    }
}
