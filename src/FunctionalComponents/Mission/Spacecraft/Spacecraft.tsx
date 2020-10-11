import React from "react";
export const Spacecraft = ({ name }: SpaceCraftProps) => (
  <p>
    <span role="img" aria-label="rocket">
      🚀️
    </span>
    Awesome spacecraft: <strong>{name}</strong>
  </p>
);

type SpaceCraftProps = { name: string };
