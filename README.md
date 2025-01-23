# @letruxux/web-search

Wrapper for web search engines libraries.
This adds no new features, just a wrapper for the libraries to make them easier to use (with same types).

## Installation

```bash
npm install @letruxux/web-search
bun add @letruxux/web-search
pnpm add @letruxux/web-search
yarn add @letruxux/web-search
```

## Usage

```js
import {
  searchGoogle,
  searchBing,
  searchDuckDuckGo,
  type SearchConfig,
} from "@letruxux/web-search";
```

### Search

```ts
const config: SearchConfig = {
  query: "Bun 1.2",
  site: "https://bun.sh" /* optional, appends site:<site> to query */,
};

/* p.s. handle errors as any error can be thrown (e.g. by ratelimiting, suspicious queries, etc.) */
const results: EngineSearchResult[] = await Promise.all([
  searchGoogle(config),
  searchBing(config),
  searchDuckDuckGo(config),
]);
```

### Types

[Check the definitions file.](./src/defs.ts)
