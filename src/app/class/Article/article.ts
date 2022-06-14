/* eslint-disable no-trailing-spaces */
export class Article {
  id: number;
  title: string;
  date: { timestamp: number };
  content: string;
  company: { name: string };
  medias: [{ id: number; file: string }];
  sponsored: boolean;
  categories: [{ title: string }];
  illustration: { id: number; file: string };
  totalCount: number = null;
}
