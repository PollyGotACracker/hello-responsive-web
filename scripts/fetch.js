export const getSlideArticles = async () => {
  const response = await fetch("data/articles_slide.json");
  const result = await response.json();
  return result;
};

export const getNotableArticles = async () => {
  const response = await fetch("data/articles_notable.json");
  const result = await response.json();
  return result;
};

export const getArticles = async () => {
  const response = await fetch("data/articles.json");
  const result = await response.json();
  return result;
};

export const getFeatured = async () => {
  const response = await fetch("data/featured.json");
  const result = await response.json();
  return result;
};
