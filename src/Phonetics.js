import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics text-center">
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }

}