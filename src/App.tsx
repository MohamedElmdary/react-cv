import React from "react";
import "./App.css";
import Tree from "./components/tree/tree";
import { Node } from "./interfaces/node";
import { markLastItem } from "./helpers/markLastItem";

const App: React.FC = () => {
  const tree: Node[] = [
    {
      content: "first",
      children: [
        {
          content: "first 2",
          children: []
        }
      ]
    },
    {
      content: "second",
      children: [
        {
          content: "third",
          children: [
            {
              content: "forth7",
              children: []
            },
            {
              content: "forth8",
              children: []
            },
            {
              content: "forth9",
              children: []
            }
          ]
        },
        {
          content: "first",
          children: [
            {
              content: "forth 6",
              children: []
            },
            {
              content: "forth 5",
              children: []
            },
            {
              content: "forth 4",
              children: [
                {
                  content: "forth 1",
                  children: []
                },
                {
                  content: "forth 2",
                  children: []
                },
                {
                  content: "forth 3",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <div>
      <Tree tree={markLastItem(tree)} index={1} />
    </div>
  );
};

export default App;
