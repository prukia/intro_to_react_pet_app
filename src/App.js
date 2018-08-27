import React from 'react';
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";


const petfinder = pf({
  key: process.env.API_Key,
  secret: process.env.API_Secret
})

class App extends React.Component {
  constructor (props) {
    super(props);

    this.stat = {
      pets: []
    };
  }

  componentDidMount(){
    // i rendered to the DOM for the first time now I can do other things
    // called once per Component
    const promise = petfinder.breed.list({ animal: "dog"}) //returns a promise (object that returns future value)
    promise.then(console.log, console.error)
  }
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
