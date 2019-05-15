import React, { Component } from "react";
import { Node } from "../../interfaces/node";
import Branch from "./branch";

interface Props {
  tree: Node[];
  index: number;
}

class Tree extends Component<Props> {
  public render(): JSX.Element {
    const styles: any = {};
    if (this.props.index) {
      styles.marginLeft = "24px";
      styles.marginTop = "-5px";
    } else {
      styles.position = "relative";
      styles.left = "-7px";
      styles.top = "-24px";
    }
    return (
      <div
        style={{
          borderLeft: "2px solid #c0392b",
          ...styles
        }}
      >
        {this.props.tree.map((node, index) => (
          <Branch
            branch={node}
            key={node.content.toString() + index}
            index={this.props.index}
          />
        ))}
      </div>
    );
  }
}

export default Tree;
