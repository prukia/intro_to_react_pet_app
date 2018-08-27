import React from 'react';
export const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name), //instead of name directly
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

export default Pet;
