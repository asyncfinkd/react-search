import React from "react";
import SearchList from "../map/searchList";

export default function Search({ value, onChange, popup, setPopup }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <div className="input-container def">
          <div style={{ width: "20px", height: "20px", marginRight: "5px" }}>
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              style={{
                fill: "#9aa0a6",
                paddingLeft: "8px",
                paddingTop: "0.5px",
              }}
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </div>
          <div className="child-input-container">
            <input
              type="text"
              className={popup ? "input h-full" : "input h-min"}
              value={value}
              onChange={onChange}
              onClick={setPopup}
            />
          </div>
        </div>
        {popup && <SearchList />}
      </form>
    </>
  );
}
