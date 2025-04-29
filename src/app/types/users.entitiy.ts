import { ContentFormValues } from "@/src/schemas/users-from.schemas";

export type TextResponse = {
  surename: string;
  motto: string;
  location: string;
  content: string;
  isAvailable: boolean;
  image: string;
};
