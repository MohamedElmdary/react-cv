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
      remove = <div>last item</div>;
    }
    return (
      <>
        {remove}
        <div
          style={{
            paddingLeft: "25px",
            paddingTop: "20px"
          }}
        >
          <p style={{ position: "relative" }}>
            {" "}
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
      </>
    );
  }
}

export default Branch;
