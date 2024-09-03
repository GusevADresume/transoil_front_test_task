import React from "react";
import { Card } from "flowbite-react";
import { baseUrl } from "../requests/baseUrl";
function NewsCard(news) {
  baseUrl();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
      <img
        className="rounded-t-lg size-96"
        src={`${baseUrl()}${news.news.news_image}`}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {news.news.news_header}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {news.news.news_body}
        </p>
      </div>
    </div>
  );
}
export { NewsCard };
