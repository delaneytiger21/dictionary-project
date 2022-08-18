import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h6>{props.meaning.partOfSpeech}</h6>
      {props.meaning.definitions.map(function (info, index) {
        return (
          <div key={index}>
            <p>{info.definition}
              <br />
              <em className="ms-4 mt-5">{info.example}</em>
            </p>
          </div>
        );
      })}

    </div>
  );
}