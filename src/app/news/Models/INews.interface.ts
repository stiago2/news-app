export interface INews {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  category: NewsCategories;
}

export type NewsCategories =
  | "Sports"
  | "Politics"
  | "HumanRights"
  | "International";
