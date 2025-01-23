export type SearchConfig = {
  query: string;
  site?: string;
};

export type EngineSearchResult = {
  title: string;
  url: string;
  snippet: string;
  image?: string;
};
