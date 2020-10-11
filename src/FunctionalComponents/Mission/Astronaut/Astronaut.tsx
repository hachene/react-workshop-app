import React from "react";

export const Astronaut = (props: { firstName: string; lastName: string }) => (
  <h2>
    Astronaut {props.firstName} {props.lastName}
  </h2>
);
