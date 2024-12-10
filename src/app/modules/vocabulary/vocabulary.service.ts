import { JwtPayload } from "jsonwebtoken";
import prisma from "../../shared/prisma";
import { TVocabulary } from "./vocabulary.type";

export const createVocabularyDB = async (
  user: JwtPayload,
  payload: TVocabulary
) => {
  const lesson = await prisma.lesson.findFirst({
    where: { lessonNumber: payload.lessonNo },
  });

  if (!lesson) {
    throw new Error("Lesson not found!");
  }
  console.log(user);

  const admin = await prisma.user.findUniqueOrThrow({
    where: { email: user.email },
  });

  payload.adminEmail = admin.email;
  payload.lessonNo = lesson.lessonNumber;
  console.log(payload);
  const vocabulary = await prisma.vocabulary.create({ data: payload });
  return vocabulary;
};

export const getAllVocabularyDB = async () => {
  const vocabulary = await prisma.vocabulary.findMany({
    select: {
      word: true,
      pronunciation: true,
      whenToSay: true,
      adminEmail: true,
      lesson: true,
    },
  });
  return vocabulary;
};

export const updateVocabularyDB = async (
  lessonId: string,
  payload: TVocabulary
) => {
  const vocabulary = await prisma.vocabulary.update({
    where: {
      id: lessonId,
    },
    data: payload,
  });
  return vocabulary;
};

export const deleteVocabularyDB = async (lessonId: string) => {
  const vocabulary = await prisma.lesson.delete({
    where: {
      id: lessonId,
    },
  });
  return vocabulary;
};
