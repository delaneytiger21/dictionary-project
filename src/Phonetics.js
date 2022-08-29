import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics text-center">
      {props.phonetics.text}
    </div>
  );
}