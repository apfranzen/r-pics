import React, { useState, createContext } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { useApi } from "../api";
import ImageList from "../UI/ImageList";

export const ImageContext = createContext(true);

export function ImageContainer() {
  const { data, error, loading } = useApi("http://www.reddit.com/r/pics.json");

  const [hidden, setHidden] = useState([]);
  // console.log({ data, error, loading });
  const [selected, setSelected] = useState([]);
  const posts =
    !loading && !error ? data.data.children.map(post => post.data) : [];
  const handleSelection = index => {
    selected.includes(index)
      ? setSelected(selected.filter(item => item !== index))
      : setSelected(selected.concat(index));
  };

  const handleHide = () => {
    setHidden(hidden.concat(selected));
    setSelected([]);
  };
  const value = {
    posts,
    error,
    loading,
    hidden,
    setHidden,
    selected,
    setSelected,
    handleSelection,
    handleHide
  };
  return (
    <div className="App">
      <div>
        <ImageContext.Provider value={value}>
          <ImageList />
        </ImageContext.Provider>
      </div>
    </div>
  );
}

export default ImageContainer;
