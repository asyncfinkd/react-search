import React from "react";

export default function SearchChildList({ id, image, title, removeItem }) {
  return (
    <>
      <div className="content-searchList" key={id}>
        <div className="flex">
          <img src={image} alt={title} className="content-image-searchList" />
          <p className="mleft">{title}</p>
        </div>
        <div>
          <button className="close-btn" onClick={removeItem}>
            ×
          </button>
        </div>
      </div>
    </>
  );
}
