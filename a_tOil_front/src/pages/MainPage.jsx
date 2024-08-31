import React from "react";
import { useState, useEffect } from "react";
import { contentRequest } from "../requests/contentRequest";
import { NewsCard } from "../components/NewsCard";
import { v4 as uuidv4 } from "uuid";

function MainPage() {
  const [newsList, setNewsList] = useState([]);
  const addNews = async () => {
    const list = await contentRequest('news');
    setNewsList(list);
  };

  useEffect(() => {
    addNews();

  }, []);

  return (
    <div>
      {newsList.map((object) => {
        return (
          <div key={uuidv4()}>
            <NewsCard news={object} />
          </div>
        );
      })}
    </div>
  );
}

export { MainPage };
