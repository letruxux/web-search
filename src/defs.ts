export type SearchConfig = {
  query: string;
  /** optional, appends "site:<site>" to query */
  site?: string;
};

export type EngineSearchResult = {
  title: string;
  url: string;
  snippet: string;
  image?: string;
};
