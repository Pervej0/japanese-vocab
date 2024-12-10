import { Lesson } from "@prisma/client";

export type TVocabulary = {
  word: string;
  pronunciation: string;
  whenToSay: string;
  adminEmail: string;
  lessonNo: string | any;
  lesson: any;
};
