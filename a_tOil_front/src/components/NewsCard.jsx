import React from "react";

function NewsCard(news) {
  console.log(news)
  return (
    <div>
      <div>
        <img src={news.news.news_image} alt="this is must be image" />
      </div>
      <div>{news.news.news_header}body</div>
      <div>{news.news.news_body}</div>
    </div>
  );
}
export { NewsCard };
