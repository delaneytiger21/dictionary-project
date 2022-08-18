import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {

  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="m-4">What word do you want to look up?</h1>
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search for a word"
          onChange={handleKeyword}
        />
        <input
          type="submit"
          value="Search"
        />
      </form>

    </div>
  );
}