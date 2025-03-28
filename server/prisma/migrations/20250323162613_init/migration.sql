/*
  Warnings:

  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Made the column `authorId` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Recipe" ("authorId", "id", "title") SELECT "authorId", "id", "title" FROM "Recipe";
DROP TABLE "Recipe";
ALTER TABLE "new_Recipe" RENAME TO "Recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
