import React, { Component } from "react";
import { Planet } from "./Planet";

export class PlanetarySystem extends Component<
  PlanetarySystemProps,
  PlanetarySystemState
> {
  state = {
    planets: [{ name: "Saturn" }, { name: "Earth" }],
  };

  addPlanetHandler = () => {
    //DON'T DO THIS: this.state.planets.push({name: "MyPlanet"})
    const currentPlanets = this.state.planets;
    this.setState({
      planets: [...currentPlanets, { name: "New Planet" }],
    });
  };

  render() {
    return (
      <div>
        <h1>Universe</h1>
        <button onClick={this.addPlanetHandler}>Add planet</button>
        {this.state.planets.map(({ name }) => (
          <Planet name={name} />
        ))}
      </div>
    );
  }
}

type PlanetarySystemProps = {
  name: string;
};

type PlanetarySystemState = {
  planets: { name: string }[];
};
