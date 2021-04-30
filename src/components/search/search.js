import React from "react";

export default function Search({ value, onChange }) {
  return (
    <>
      <form>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </>
  );
}
