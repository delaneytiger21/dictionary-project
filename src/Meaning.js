import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h6>{props.meaning.partOfSpeech}</h6>
      {props.meaning.definitions.map(function (info, index) {
        return (
          <div key={index}>
            <p>Definition: {info.definition}</p>
            <p>Example: {info.example}</p>
            Synonyms: <Synonyms synonyms={info.synonyms} />
          </div>
        );
      })}
    </div>
  );
}