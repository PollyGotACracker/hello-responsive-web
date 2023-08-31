import { getSlideArticles, getNotableArticles, getArticles } from "./fetch.js";

const $main = document.querySelector("main");
const $section_slider = document.querySelector(".section-slider");

const getArticleLimit = () => {
  const screenWidth = window.screen.width;
  // desktop: 5, tablet: 4, mobile: 2
  if (screenWidth >= 1250) return 5;
  if (screenWidth >= 721) return 4;
  if (screenWidth <= 720) return 2;
  else return 5;
};

const genArticleItems = (data, section = "") => {
  const availableSection = ["slide", "notable", ""];
  if (!availableSection.includes(section)) return false;

  const ignoreKeys = ["id", "imageSrc"];
  const infoKeys = ["share", "views", "comments"];
  return data.map((item, index) => {
    const isDesktop = getArticleLimit() === 5;
    const isFirstArticle = section === "" && index === 0;
    const large = isDesktop && isFirstArticle ? "large" : "";

    const article = document.createElement("ARTICLE");
    article.classList.add("article");
    if (section !== "") article.classList.add(section);
    if (large !== "") article.classList.add(large);
    const footer = document.createElement("DIV");
    footer.className = "footer";

    for (let [key, value] of Object.entries(item)) {
      if (ignoreKeys.includes(key)) continue;
      const tag = key === "title" ? "H2" : key === "desc" ? "P" : "DIV";
      const node = document.createElement(tag);
      node.className = key;
      node.textContent = value;
      if (infoKeys.includes(key)) footer.append(node);
      else article.append(node);
    }
    if (section === "notable") {
      const button = document.createElement("BUTTON");
      button.textContent = "READ MORE";
      button.type = "button";
      article.append(button);
    } else {
      const cover = document.createElement("IMG");
      cover.className = "cover";
      cover.title = "article cover";
      cover.src = item?.imageSrc;
      article.append(footer);
      article.append(cover);
    }
    return article;
  });
};

const slideData = await getSlideArticles();
const notableData = await getNotableArticles();
const articleData = await getArticles(getArticleLimit());

const slideItems = genArticleItems(slideData, "slide");
const notableItems = genArticleItems(notableData, "notable");
const articleItems = genArticleItems(articleData);
const articleLastItems = articleItems.splice(-2);

$section_slider.append(...slideItems);
$main.append(
  ...articleItems,
  articleLastItems[0],
  ...notableItems,
  articleLastItems[1]
);
