import React from "react";
import "./App.css";
import profile from "./assets/images/profile.jpg";
import Tree from "./components/tree/tree";
import { markLastItem } from "./helpers/markLastItem";
import { experience, skills } from "./data/data";
import Header from "./components/header";

const App: React.FC = () => {
  const tags =
    "Front end developer-Back end developer-Angular 2+-React-Vuejs-React native-Server side render-Nodejs-Express-Nestjs-Jest-Mocha-Rxjs-Typescript-html-Css-Themeforest";

  return (
    <main>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="profile-image">
          <img src={profile} style={{ maxWidth: "300px" }} />
        </div>
        <div className="profile-info">
          <h1>Mohamed Rabie Elmdary</h1>
          <p>Fullstack Developer.</p>
          <p>
            Email:
            <a href="mailto:engm5081@gmail.com" target="_blank">
              engm5081@gmail.com
            </a>
          </p>
          <p>
            Tel:
            <a href="tel:01282859139" target="_blank">
              01282859139
            </a>
          </p>
          <p>Mansoura, Egypt.</p>
          <div className="tags">
            <h5>Tags</h5>
            {tags.split("-").map((tag, i) => (
              <span key={i} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="divider" />
      <div className="container">
        <Header name="Education" />
        <p>CSED - 2016-2021</p>
        <p>
          A student in Mansoura university, studying computer science and
          embedded systems
        </p>
      </div>
      <div className="divider" />
      <div className="container">
        <Header name="Experience" />
        <Tree tree={markLastItem(experience)} index={0} />
      </div>
      <div className="divider" />
      <div className="container">
        <Header name="Technical Skills" />
        <Tree tree={markLastItem(skills)} index={0} />
      </div>
    </main>
  );
};

export default App;
