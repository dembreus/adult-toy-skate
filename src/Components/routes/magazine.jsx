import React from "react";
import MagCard from "../utils/magCard/magCard";

const articles = [
  {
    title: "Call it Venting 2 Bonus Footy",
    channel: "Joey Sandoval",
    publishDate: "08/25/2016",
    summary: "unused footage that sadly didn't make it onto the DVD.",
    src: "https://www.youtube.com/embed/FjMWN-FK92k"
  }
];
const magazine = ({ article, relatedArticles }) => {
  return <MagCard article={articles[0]} />;
};

export default magazine;
