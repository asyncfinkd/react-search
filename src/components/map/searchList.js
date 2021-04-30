import React from "react";
import { data } from "../data/data";

export default function SearchList() {
  return (
    <>
      <div className="container-searchList">
        {data.map((item) => {
          const { id, title, image } = item;
          return (
            <>
              <div className="content-searchList" key={id}>
                <div className="flex">
                  <img
                    src={image}
                    alt={title}
                    className="content-image-searchList"
                  />
                  <p className="mleft">{title}</p>
                </div>
                <div>
                  <button className="close-btn">×</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
