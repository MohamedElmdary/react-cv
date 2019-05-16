import React, { Component } from "react";

class Header extends Component<{ name: string; center?: Boolean }> {
  public render() {
    const style: any = {};
    if (this.props.center) {
      style.textAlign = "center";
    }
    return (
      <div style={style}>
        <h4 className="section-header">{this.props.name}</h4>
      </div>
    );
  }
}

export default Header;
