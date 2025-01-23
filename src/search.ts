import { search as googleSearch } from "google-sr";
import { search as bingSearch } from "bing-scraper";
import { search as ddgSearch } from "duck-duck-scrape";
import type { SearchConfig, EngineSearchResult } from "./defs";

function applySiteModifier(query: string, site?: string): string {
  return site ? `${query} site:${site}` : query;
}

export async function searchGoogle(config: SearchConfig): Promise<EngineSearchResult[]> {
  const query = applySiteModifier(config.query, config.site);
  const results = await googleSearch({ query });

  return results
    .filter(
      (e) =>
        e.title && e.link && typeof e.title === "string" && typeof e.link === "string"
    )
    .map((result) => ({
      title: result.title!,
      url: result.link!,
      snippet: result.description ?? "",
      image: undefined,
    }));
}

export async function searchBing(config: SearchConfig): Promise<EngineSearchResult[]> {
  const query = applySiteModifier(config.query, config.site);
  const { results } = await bingSearchPromise({ q: query });

  return results.map((result) => ({
    title: result.title,
    url: result.url,
    snippet: result.description,
    image: undefined,
  }));
}

export async function searchDuckDuckGo(
  config: SearchConfig
): Promise<EngineSearchResult[]> {
  const query = applySiteModifier(config.query, config.site);
  const { results } = await ddgSearch(query);

  return results.map((result) => ({
    title: result.title,
    url: result.url,
    snippet: result.description,
    image: result.icon || undefined,
  }));
}

/* helper */
function bingSearchPromise(options: BingSearchOptions): Promise<SearchResponse> {
  return new Promise((resolve, reject) => {
    bingSearch(options, (err, res) => {
      if (err || !res) {
        reject(err ? err : new Error("No results"));
      } else {
        resolve(res);
      }
    });
  });
}
