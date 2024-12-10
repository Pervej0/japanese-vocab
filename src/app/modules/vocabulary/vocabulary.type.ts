import { Lesson } from "@prisma/client";

export type TVocabulary = {
  word: string;
  pronunciation: string;
  whenToSay: string;
  adminEmail: string;
  lesson: any;
};
