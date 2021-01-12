import React from "react";
import { Link } from "react-router-dom";
import ArticleContent from "./article-content";
import ArticleList from "../../src/components/ArticleList";

const ArticleListPage = () => (
  <>
    <h1>Article</h1>
    {ArticleContent.map((article, key) => (
      <Link key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
      </Link>
    ))}
    <ArticleList articles={ArticleContent} />
  </>
);

export default ArticleListPage;
