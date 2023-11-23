import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";



console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Overreacted" />
      <About image='../../images/demo.png' about={blogData.about} />
      <ArticleList article1={blogData.posts[0]} article2={blogData.posts[1]} article3={blogData.posts[2]} />
    </div>
  );
}

export default App;
