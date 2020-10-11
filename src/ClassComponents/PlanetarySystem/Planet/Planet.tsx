import React, { Component } from "react";

export class Planet extends Component<PlanetProps> {
  render() {
    const { name, children } = this.props;

    return (
      <div>
        <h2>
          Planet {name} with satellites: {children}
        </h2>
      </div>
    );
  }
}

type PlanetProps = {
  name: string;
};
