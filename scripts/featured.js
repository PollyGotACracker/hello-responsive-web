import { getFeatured } from "./fetch.js";

const $section_featured = document.querySelector(
  ".section-featured > .contents"
);

const featuredData = await getFeatured();

const featuredItems = featuredData.map((item, idx) => {
  const featured = document.createElement("DIV");
  featured.className = "featured-item";
  const index = document.createElement("DIV");
  index.className = "index";
  index.textContent = idx + 1;
  featured.append(index);

  for (let [key, value] of Object.entries(item)) {
    if (key === "id") continue;
    const node = document.createElement("DIV");
    node.className = key;
    node.textContent = value;
    featured.append(node);
  }
  return featured;
});

$section_featured.append(...featuredItems);
