import { InMemoryDbService } from "angular-in-memory-web-api";

export class ApiData implements InMemoryDbService {
  createDb() {
    const news: any[] = [
      {
        id: 11,
        title: "Coronavirus kill thousands",
        subtitle: "Coronavirus is killing everyone",
        image: null,
        category: "International",
        description: "The new virus is killing everybody"
      },
      {
        id: 31,
        title: "Coronavirus is now in Italy",
        subtitle: "Coronavirus is killing everyone",
        image: null,
        category: "HumanRights",
        description:
          "The new virus is killing everybody,The new virus is killing everybody,The new virus is killing everybody,The new virus is killing everybody,The new virus is killing everybody"
      },
      {
        id: 21,
        title: "Madrid vs Barca",
        subtitle: "Coronavirus is killing everyone",
        image: null,
        category: "Sports",
        description: "The new virus is killing everybody"
      },
      {
        id: 111,
        title: "Trump kill coronavirus",
        subtitle: "Coronavirus is killing everyone",
        image: null,
        category: null,
        description: "The new virus is killing everybody"
      }
    ];
    const categories: any[] = [
      { name: "Sports", value: "Sports" },
      { name: "Politics", value: "Politics" },
      { name: "Human Rights", value: "HumanRights" },
      {
        name: "International",
        value: "International"
      }
    ];
    return { news, categories };
  }

  genId(news: any[]): number {
    return news.length > 0 ? Math.max(...news.map(n => n.id)) + 1 : 11;
  }
}
