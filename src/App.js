import React, { useState } from "react";
import Search from "./components/search/search";

export default function App() {
  const [input, setInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Search
        value={input}
        popup={showPopup}
        onChange={(e) => setInput(e.target.value)}
        setPopup={() => {
          setShowPopup(true);
        }}
        closePopup={() => {
          setShowPopup(!showPopup);
        }}
      />
    </>
  );
}
