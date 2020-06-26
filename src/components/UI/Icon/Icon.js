import React from "react";
import * as Svgs from "./Svgs";

const Icon = ({ name }) => {
  const Icon = Svgs[name];

  return <Icon />;
};

export default Icon;
