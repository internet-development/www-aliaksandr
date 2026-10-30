# sasha.page

The personal site of Aliaksandr "Sasha" Hudzilin — angel investor, co-founder of NEAR Protocol — showcasing his background, investment thesis, portfolio companies, and writings from [sashapage.substack.com](https://sashapage.substack.com).

Built with Next.js, TypeScript, and CSS Modules.

## Running locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Then open [http://localhost:10000](http://localhost:10000).

The homepage loads portfolio companies with `FILE_API_KEY` from `.env`; `DOMAIN` selects the site and defaults to `sasha.page`.

## Production build

```sh
npm run build
npm start
```

`npm start` serves the build on port 10000.
