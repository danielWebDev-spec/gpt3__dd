import React, { useState } from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import "./blog.css";

const groupBData = () => [
  {
    imgUrl: blog02,
    date: "Sep 26, 2001",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog03,
    date: "Sep 26, 2001",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog04,
    date: "Sep 26, 2001",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
  {
    imgUrl: blog05,
    date: "Sep 26, 2001",
    text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
  },
];

const Blog = () => {
  const [blogItems, setblogItems] = useState(groupBData);

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2001"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          {blogItems.map(({ imgUrl, date, text }, index) => (
            <Article key={index} imgUrl={imgUrl} date={date} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
