import React from "react";
import "./App.css";
import profile from "./assets/images/profile.jpg";
import Tree from "./components/tree/tree";
import { markLastItem } from "./helpers/markLastItem";
import { experience, skills, projects } from "./data/data";
import Header from "./components/header";

const App: React.FC = () => {
  const tags =
    "Front end developer-Back end developer-Angular 2+-React-Vuejs-React native-Server side render-Nodejs-Express-Nestjs-Jest-Mocha-Rxjs-Typescript-html-Css-Themeforest";

  return (
    <main>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center"
        }}
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
        <Header name="Education" center />
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
      <div className="divider" />
      <div className="container">
        <Header name="Projects" />
        <Tree tree={markLastItem(projects)} index={0} />
      </div>
      <div className="divider" />
      <div className="container">
        <Header name="Contacts" center />
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/mohamed-elmdary-949968181/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://www.facebook.com/mohamed.rabie.5439087"
            target="_blank"
          >
            <i className="fab fa-facebook-f" />
          </a>
          <a
            href="https://themeforest.net/user/mohamedelmdary/portfolio"
            target="_blank"
          >
            <i className="fab fa-envira" />
          </a>
          <a href="https://github.com/MohamedElmdary" target="_blank">
            <i className="fab fa-github-alt" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default App;
