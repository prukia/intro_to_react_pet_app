import React from "react";

const SearchContext = React.createContext({
  // provider is entrance of the reporter
  // consumer is the exit
  location: "Minneapolis, MN",
  animal: "",
  breed: "",
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
