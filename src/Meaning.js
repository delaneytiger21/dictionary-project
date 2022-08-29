import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5 className="text-capitalize">{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (info, index) {
        return (
          <div key={index}>
            <div className="Definition">{info.definition}</div>
            <div className="Example">{info.example}</div>
            <Synonyms synonyms={info.synonyms} />
          </div>
        );
      })}
    </div >
  );
}