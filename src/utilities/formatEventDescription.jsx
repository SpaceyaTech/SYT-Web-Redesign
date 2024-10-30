/* eslint-disable react/no-array-index-key */
import React from "react";
// .split("\r\n\r\n") Splits by paragraphs
// .split("\r\n") splits by lines
const formatEventDescription = (text) =>
  text.split("\r\n\r\n").map((paragraph) => (
    <p key={crypto.randomUUID()} className="leading-6 mb-4 whitespace-pre-wrap">
      {paragraph.split("\r\n").map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < paragraph.split("\r\n").length - 1 && (
            // Adds space between lines
            <br className="mb-2" />
          )}
        </React.Fragment>
      ))}
    </p>
  ));

export default formatEventDescription;
