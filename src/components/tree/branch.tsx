import React, { Component } from "react";
import { Node } from "../../interfaces/node";
import Tree from "./tree";

interface Props {
  branch: Node;
  index: number;
}

class Branch extends Component<Props> {
  public render() {
    let remove = null;
    if (this.props.branch.lastItem) {
      const width = 50 * this.props.index - 20 * this.props.index;
      remove = (
        <div
          style={{
            position: "absolute",
            height: "calc(100% - 50px)",
            width: `${width}px`,
            background: "blue",
            zIndex: 9,
            top: "50px",
            left: `${-width / 2}px`
          }}
        >
          sda
        </div>
      );
    }
    return (
      <div style={{ position: "relative" }}>
        {remove}
        <div
          style={{
            paddingLeft: "25px",
            paddingTop: "20px"
          }}
        >
          <p style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: "-31px",
                height: "10px",
                width: "10px",
                background: "#c0392b",
                transform: "rotate(45deg)"
              }}
            />
            {this.props.branch.content}
          </p>
        </div>
        <Tree tree={this.props.branch.children} index={this.props.index + 1} />
      </div>
    );
  }
}

export default Branch;
