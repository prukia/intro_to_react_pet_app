import React from 'react';
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
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
render(<App/>, document.getElementById("root")); //render root to div on line 14
