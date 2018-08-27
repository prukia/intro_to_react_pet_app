import React from 'react';

// export const Pet = props => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name), //instead of name directly
//     React.createElement("h2", {}, props.animal),
//     React.createElement("h2", {}, props.breed)
//   ]);

// using JSX
const Pet = props => {

  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

export default Pet;