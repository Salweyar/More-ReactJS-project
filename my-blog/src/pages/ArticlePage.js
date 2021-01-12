import React from "react";
import ArticleContent from "./article-content";
import ArticleList from "../components/ArticleList";

//match see the article and display it
const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);

  //if article does not exist then display this
  if (!article) return <h1>Article does not exist!</h1>;
  //   const otherArticles = ArticleContent.fliter(
  //     (articles) => articles.name !== name
  //   );

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <h3>Other Articles:</h3>
      <ArticleList />
    </>
  );
};
export default ArticlePage;
