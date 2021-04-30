import React, { useState } from "react";
import Search from "./components/search/search";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <>
      <Search value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  );
}
