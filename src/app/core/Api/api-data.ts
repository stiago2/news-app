import { InMemoryDbService } from "angular-in-memory-web-api";

export class ApiData implements InMemoryDbService {
  createDb() {
    const news: any[] = [];
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
