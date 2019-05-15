import React, { Component, Fragment } from "react";
import { Node, Content } from "../../interfaces/node";
import Tree from "./tree";
import "./branch.css";
import NodeSelector from "./nodeSelector";

interface Props {
  branch: Node;
  index: number;
}

class Branch extends Component<Props> {
  public render() {
    let remove = null;
    if (this.props.branch.lastItem) {
      remove = (
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 30px)",
            width: `2px`,
            background: "white",
            zIndex: 9,
            top: "36px",
            left: `-2px`
          }}
        />
      );
    }
    return (
      <div style={{ position: "relative" }}>
        {remove}
        <div
          style={{
            paddingLeft: "35px",
            paddingTop: "15px",
            position: "relative",
            top: "5px"
          }}
        >
          <p style={{ position: "relative" }}>
            <span
              className="node-point"
              style={{
                position: "absolute",
                left: "-15px",
                top: "5px",
                height: "10px",
                width: "10px",
                background: "#c0392b",
                transform: "rotate(45deg)"
              }}
            />
          </p>
          <div>
            {this.props.branch.content.map((node: Content, i) => {
              return (
                <Fragment key={i}>
                  <NodeSelector node={node} />
                </Fragment>
              );
            })}
          </div>
        </div>
        <Tree
          tree={this.props.branch.children || []}
          index={this.props.index + 1}
        />
      </div>
    );
  }
}

export default Branch;
