import { getJson } from "serpapi";

const api = "https://zenquotes.io/api/quotes/";

type ApiResponse = {
  // Quote
  q: string;

  // Author
  a: string;

  // Character Count
  c: string;

  // Html Quote
  h: string;
};

async function getQuotesFromApi() {
  const response = await fetch(api);
  const data = await response.json();

  return data as ApiResponse[];
}

async function getQuotesFromFs() {
  const quotes = await Bun.file("./quotes.json").json();

  return quotes as ApiResponse[];
}

async function getInfluentialFiguresImage(quote: ApiResponse) {
  const response = await getJson({
    api_key: process.env.SERPAPI_KEY,
    engine: "google_images",
    q: quote.a,
    hl: "en",
    gl: "us",
    tbs: "as_sitesearch=en.wikipedia.org",
  });

  const imageFromWikipedia = response.images_results.find((image) =>
    image.source.includes("Wikipedia")
  );

  return {
    url: imageFromWikipedia?.original,
    alt: imageFromWikipedia?.title,
    link: imageFromWikipedia?.link,
  };
}

async function generateReadme() {
  let quotes = await getQuotesFromFs();

  if (quotes.length === 0) {
    quotes = await getQuotesFromApi();
  }

  const randomQuote = Math.floor(Math.random() * quotes.length);
  const [quote] = quotes.splice(randomQuote, 1);
  const image = await getInfluentialFiguresImage(quote);

  const html = `# Random Quote from Influential Figures

<div align="center">
  <br>
  <br>
  <a href="${image.link}" title="${image.alt}"><img src="${image.url}" width="600px"></a>
  <br>
  <br>
  ${quote.h}
</div>
  `;

  await Promise.all([
    Bun.write("./README.md", html),
    Bun.write("./quotes.json", JSON.stringify(quotes)),
  ]);
}

generateReadme();
