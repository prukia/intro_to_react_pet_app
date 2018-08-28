import React from "React";
import { ANIMALS } from 'petfinder-client';

class SearchParams extends React.Component {
  state = {
    location: "Minneapolis, MN",
    animal: "",
    breed: ""
  };
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };
  handleAnimalChange = event => {
    this.setState({
      animal: event.target.value
    });
  };
  render(){
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
        <input
          id="location"
          onChange={this.handleLocationChange}
          value={this.state.location}
          placeholder="location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={this.state.animal}
          onChange={this.handleAnimalChange}
          onBlur={this.handleAnimalChange}
        >
          <option/>
          {
            ANIMALS.map(animal => (
              <option key={animal} value={animal}>{animal}</option>
            ))
          }
        </select>
      </label>
      </div>
    );
  }
}

export default SearchParams;
