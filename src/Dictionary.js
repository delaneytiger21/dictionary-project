import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0])
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="m-5">What word do you want to look up?</h1>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          onChange={handleKeyword}
        />
        <input
          type="submit"
          value="Search"
        />
      </form>
      <Results results={results} />
    </div>
  );
}