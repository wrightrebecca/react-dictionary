import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.slice(0, 2).map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <strong>Example: </strong>
              <em>{definition.example}</em> <br />
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
