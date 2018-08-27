import React from 'react';
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  // handleTitleClick() {
  //   alert("you clicked the title");
  // }
  render() {
  //   return React.createElement("div", {}, [
  //     React.createElement(
  //       "h1",
  //       { onClick: this.handleTitleClick },
  //       "Adopt Me!"
  //     ),
  //     React.createElement(Pet, {
  //       name: "Luna",
  //       animal: "Dog",
  //       breed: "Havanese"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel"
  //     }),
  //     React.createElement(Pet, {
  //       name: "Doink",
  //       animal: "cat",
  //       breed: "Mixed"
  //     })
  //   ]);

// using JSX
    return (
      <div>
        <h1>Adapt Me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mix" />
      </div>
    )
  }
}
render(React.createElement(App), document.getElementById("root")); //render root to div on line 14
