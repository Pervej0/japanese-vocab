/*
  Warnings:

  - You are about to drop the column `lessonNo` on the `Vocabularies` table. All the data in the column will be lost.
  - Added the required column `lessonId` to the `Vocabularies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Vocabularies" DROP CONSTRAINT "Vocabularies_lessonNo_fkey";

-- AlterTable
ALTER TABLE "Vocabularies" DROP COLUMN "lessonNo",
ADD COLUMN     "lessonId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Vocabularies" ADD CONSTRAINT "Vocabularies_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
