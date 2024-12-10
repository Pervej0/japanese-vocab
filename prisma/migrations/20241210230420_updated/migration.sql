/*
  Warnings:

  - You are about to drop the column `lessonId` on the `vocabularies` table. All the data in the column will be lost.
  - Added the required column `lessonNo` to the `vocabularies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meaning` to the `vocabularies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "vocabularies" DROP CONSTRAINT "vocabularies_lessonId_fkey";

-- AlterTable
ALTER TABLE "vocabularies" DROP COLUMN "lessonId",
ADD COLUMN     "lessonNo" INTEGER NOT NULL,
ADD COLUMN     "meaning" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "vocabularies" ADD CONSTRAINT "vocabularies_lessonNo_fkey" FOREIGN KEY ("lessonNo") REFERENCES "lessons"("lessonNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
