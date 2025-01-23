interface BingSearchOptions {
  q?: string;
  url?: string;
  userAgent?: string;
  lang?: string;
  referer?: string;
  cookieString?: string | null;
  enforceLanguage?: boolean;
  pageCount?: number;
}

interface SearchResult {
  title: string;
  url: string;
  description: string;
}

interface DidYouMean {
  href: string;
  query: string;
}

interface SuggestedQuery {
  url: string;
  query: string;
}

interface CarouselCard {
  content: string;
  image: string;
  url: string;
}

interface Carousel {
  title: string;
  cards: CarouselCard[];
}

interface VideoObject {
  title: string;
  meta: string;
  url: string | null;
}

interface SidebarFootnote {
  content: string;
  url: string;
}

interface Sidebar {
  title: string;
  subtitle: string;
  snippet: string | null;
  image: string | null;
  footnotes: SidebarFootnote[];
}

interface TopAnswer {
  answer: string;
  title: string;
  image: string | null;
}

interface QnAAnswer {
  answer: string;
  source: {
    title: string;
    url: string;
  };
}

interface SearchResponse {
  currHref: string;
  results: SearchResult[];
  didyoumean: DidYouMean | null;
  suggestedQueries: SuggestedQuery[];
  carousel: Carousel | null;
  videoObject: VideoObject | null;
  sidebar: Sidebar | null;
  prevHref: string | null;
  nextHref: string | null;
  topAnswer: TopAnswer | null;
  qnaAnswer: QnAAnswer | null;
  nextPageError?: any;
}

interface ImageResult {
  thumbnail: string;
  source: string;
  direct: string;
  description: string;
  title: string;
}

interface ImageSearchResponse {
  results: ImageResult[];
  didyoumean: DidYouMean | null;
  nextUrl: string | null;
  prevHref?: string;
  nextPageError?: any;
}

declare module "bing-scraper" {
  export function getCookies(
    opts: BingSearchOptions | null,
    cb: (err: any, cookies: string | null) => void
  ): void;
  export function search(
    query: BingSearchOptions | string,
    cb: (err: any, response: SearchResponse | null) => void
  ): void;
  export function imageSearch(
    query: BingSearchOptions | string,
    cb: (err: any, response: ImageSearchResponse | null) => void
  ): void;
  export function suggest(
    query: string,
    cb: (err: any, suggestions: string[] | null) => void
  ): void;
}
