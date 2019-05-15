import React, { Component } from "react";

class Header extends Component<{ name: string }> {
  public render() {
    return (
      <div>
        <h4 className="section-header">{this.props.name}</h4>
      </div>
    );
  }
}

export default Header;
