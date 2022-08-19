import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h6>{props.meaning.partOfSpeech}</h6>
      {props.meaning.definitions.map(function (info, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {info.definition}
              <br />
              <strong>Example:</strong> {info.example}
              <br />
              <Synonyms synonyms={info.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}