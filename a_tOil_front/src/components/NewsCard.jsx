import React from "react";
import { baseUrl } from "../requests/baseUrl";
function NewsCard(news) {
  baseUrl()
  return (
    <div>
      <div>
        <img src={`${baseUrl()}${news.news.news_image}`} alt="this is must be image" />
      </div>
      <div>{news.news.news_header}</div>
      <div>{news.news.news_body}</div>
    </div>
  );
}
export { NewsCard };

