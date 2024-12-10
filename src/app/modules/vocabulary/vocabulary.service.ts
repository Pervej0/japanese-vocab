import prisma from "../../shared/prisma";
import { TVocabulary } from "./vocabulary.type";

export const createVocabularyDB = async (user: any, payload: TVocabulary) => {
  try {
    const admin = await prisma.user.findUniqueOrThrow({
      where: { email: user.email },
    });

    payload.adminEmail = admin.email;
    console.log(payload);
    const lesson = await prisma.vocabulary.create({ data: payload });
    return lesson;
  } catch (error) {
    console.log(error);
  }
};

export const getAllVocabularyDB = async () => {
  const lessons = await prisma.vocabulary.findMany({
    select: {
      word: true,
      pronunciation: true,
      whenToSay: true,
      adminEmail: true,
      lesson: true,
    },
  });
  return lessons;
};

export const updateVocabularyDB = async (
  lessonId: string,
  payload: TVocabulary
) => {
  const lessons = await prisma.vocabulary.update({
    where: {
      id: lessonId,
    },
    data: payload,
  });
  return lessons;
};

export const deleteVocabularyDB = async (lessonId: string) => {
  const lessons = await prisma.lesson.delete({
    where: {
      id: lessonId,
    },
  });
  return lessons;
};
