import React from "react";
import { ImageContext } from "../images/ImagesContainer";
import Image from "./Image";

function ImageList() {
  return (
    <ImageContext.Consumer>
      {({
        posts,
        error,
        loading,
        hidden,
        selected,
        setSelected,
        handleSelection,
        handleHide
      }) => (
        <div style={{ padding: "2em 20%" }}>
          <button
            onClick={e => {
              handleHide();
            }}
            style={{
              width: "20em",
              position: "fixed",
              top: 5
            }}
            disabled={!selected.length}
          >
            Hide {selected.length || ""} Selected Item(s)
          </button>
          <h1 style={{ textAlign: "center" }}>/r/pics</h1>
          {hidden.length > 0 && <p>{hidden.length} Pics Hidden</p>}
          {!loading && !error && posts.length === hidden.length ? (
            <p>All posts hidden</p>
          ) : null}
          {posts.length ? (
            posts.map((post, index) =>
              hidden.includes(index) ? null : (
                <Image
                  {...{
                    setSelected,
                    index,
                    post,
                    handleSelection,
                    isSelected: selected.includes(index)
                  }}
                />
              )
            )
          ) : (
            <h2> "...loading"</h2>
          )}
        </div>
      )}
    </ImageContext.Consumer>
  );
}

export default ImageList;
