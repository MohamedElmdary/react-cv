import React, { Component } from "react";
import { Node } from "../../interfaces/node";
import Branch from "./branch";

interface Props {
  tree: Node[];
  index: number;
}

class Tree extends Component<Props> {
  public render() {
    const styles: any = {};
    if (this.props.index) {
      styles.marginLeft = "23px";
      styles.marginTop = "-5px";
    }
    return (
      <div
        style={{
          borderLeft: "2px solid #c0392b",
          ...styles
        }}
      >
        {this.props.tree.map(node => (
          <Branch branch={node} key={node.content} index={this.props.index} />
        ))}
      </div>
    );
  }
}

export default Tree;
