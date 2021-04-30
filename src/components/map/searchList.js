import React, { useState } from "react";
import { data } from "../data/data";
import SearchChildList from "./SearchChildList";

export default function SearchList({ input }) {
  const [renderData, setRenderData] = useState(data);
  const removeItem = (id) => {
    const newItem = renderData.filter((data2) => data2.id !== id);
    setRenderData(newItem);
  };
  return (
    <>
      {renderData.length > 0 && (
        <div className="container-searchList">
          {renderData
            .filter((val) => {
              if (val.title.toLowerCase().includes(input.toLowerCase())) {
                return val;
              }
            })
            .map((item) => {
              const { id, title, image } = item;
              return (
                <>
                  <SearchChildList
                    {...item}
                    removeItem={() => removeItem(id)}
                  />
                </>
              );
            })}
        </div>
      )}
    </>
  );
}
