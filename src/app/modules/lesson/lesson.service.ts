import prisma from "../../shared/prisma";
import { TLesson } from "./lesson.type";

export const createLessonDB = async (payload: TLesson) => {
  const lesson = await prisma.lesson.create({ data: payload });
  return lesson;
};
export const getAllLessonDB = async () => {
  const lessons = await prisma.lesson.findMany({
    select: {
      id: true,
      lessonName: true,
      lessonNumber: true,
      vocabulary: true,
    },
  });
  return lessons;
};

export const updateLessonDB = async (lessonId: string, payload: TLesson) => {
  const lessons = await prisma.lesson.update({
    where: {
      id: lessonId,
    },
    data: payload,
  });
  return lessons;
};

export const deleteLessonDB = async (lessonId: string) => {
  const lessons = await prisma.lesson.delete({
    where: {
      id: lessonId,
    },
  });
  return lessons;
};
