import React from "react";

interface Props {
  name: string;
}

const Component: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};

export default Component;
