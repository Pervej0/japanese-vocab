-- CreateTable
CREATE TABLE "lessons" (
    "id" SERIAL NOT NULL,
    "lessonName" TEXT NOT NULL,
    "lessonNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vocabularies" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "pronunciation" TEXT NOT NULL,
    "whenToSay" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    "lessonNo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vocabularies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Vocabularies" ADD CONSTRAINT "Vocabularies_lessonNo_fkey" FOREIGN KEY ("lessonNo") REFERENCES "lessons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
