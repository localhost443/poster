import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="rounded shadow-sm">
        <div className="bg-pink-900 text-center pb-3">
          <h1 className="text-gray-100  font-medium tracking-wide">
            Welcome to MicroPost
          </h1>
          <p className="text-pink-100">Share whatever you may want</p>
        </div>
      </div>
    );
  }
}

export default Header;
