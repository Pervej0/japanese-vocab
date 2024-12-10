import prisma from "../../shared/prisma";
import { TLesson } from "./lesson.type";

export const createLessonDB = async (payload: TLesson) => {
  console.log(payload);
};
