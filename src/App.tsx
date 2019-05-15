import React from "react";
import "./App.css";
import Tree from "./components/tree/tree";
import { markLastItem } from "./helpers/markLastItem";
import { experience } from "./data/data";

const App: React.FC = () => {
  return (
    <div>
      <Tree tree={markLastItem(experience)} index={0} />
    </div>
  );
};

export default App;
