import React from "react";
import { Content, ElementType } from "../../interfaces/node";
import "./nodeSelector.css";

interface Props {
  node: Content;
}

const NodeSelector: React.FC<Props> = props => {
  let { elementType, value } = props.node;
  value = value + " ";
  switch (elementType) {
    case ElementType.H1:
      return <h3 className="h3">{value}</h3>;
    case ElementType.H2:
      return <h4 className="h4">{value}</h4>;
    case ElementType.H3:
      return <h5 className="h5">{value}</h5>;
    case ElementType.P:
      return <p className="p">{value}</p>;
    case ElementType.A:
      let values = [];
      if (value.indexOf("http") === 0) {
        values[0] = value;
      } else {
        values = value.split("-");
      }

      if (values.length === 1) {
        values[1] = values[0];
      } else if (values.length > 2) {
        values[1] = values.slice(1).join("-");
      }

      return (
        <a
          className="a"
          href={values[1]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {values[0]}
        </a>
      );
  }
};

export default NodeSelector;
