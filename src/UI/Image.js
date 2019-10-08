import React from "react";

function Image({
  selected,
  setSelected,
  index,
  post,
  handleSelection,
  isSelected
}) {
  return (
    <div
      className="post"
      onClick={() => handleSelection(index)}
      style={{
        background: index % 2 === 0 ? "#edf2f5" : "white",
        cursor: "pointer",
        display: "grid",
        margin: "2rem 0",
        padding: "2em",
        boxShadow: isSelected ? "#FC94AB 0px 0px 2px 3px" : null
      }}
      title="Click to select this post"
    >
      <div
        style={{
          display: "grid",
          gridRow: 1,
          gridTemplateColumns: "3rem 2fr"
        }}
      >
        {isSelected && (
          <i
            style={{
              gridColumn: 1,
              fontSize: "3rem",
              justifySelf: "center",
              color: "#FC94AB"
            }}
            className="fa fa-check-circle"
          ></i>
        )}
        <h2
          style={{
            paddingLeft: "2rem",
            gridColumn: 2,
            justifySelf: "left",
            alignSelf: "start"
          }}
        >
          {post.title}
        </h2>
      </div>
      <div style={{ gridRow: 2, justifySelf: "center" }}>
        <img
          style={{ maxWidth: "100%", maxHeight: "512px" }}
          src={post.url}
          alt={post.title}
        ></img>
      </div>
    </div>
  );
}

export default Image;
