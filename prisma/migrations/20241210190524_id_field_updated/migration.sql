/*
  Warnings:

  - The primary key for the `Vocabularies` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `lessons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[lessonNumber]` on the table `lessons` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Vocabularies" DROP CONSTRAINT "Vocabularies_lessonNo_fkey";

-- AlterTable
ALTER TABLE "Vocabularies" DROP CONSTRAINT "Vocabularies_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonNo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Vocabularies_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Vocabularies_id_seq";

-- AlterTable
CREATE SEQUENCE lessons_lessonnumber_seq;
ALTER TABLE "lessons" DROP CONSTRAINT "lessons_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "lessonNumber" SET DEFAULT nextval('lessons_lessonnumber_seq'),
ADD CONSTRAINT "lessons_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "lessons_id_seq";
ALTER SEQUENCE lessons_lessonnumber_seq OWNED BY "lessons"."lessonNumber";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "lessons_lessonNumber_key" ON "lessons"("lessonNumber");

-- AddForeignKey
ALTER TABLE "Vocabularies" ADD CONSTRAINT "Vocabularies_lessonNo_fkey" FOREIGN KEY ("lessonNo") REFERENCES "lessons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
