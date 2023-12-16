import React from "react";
import _ from "lodash"

type SeparatorProps = {
    turns: number, 
    style: React.CSSProperties
}
type RadialSeparatorProps = {
    count: number, 
    style: React.CSSProperties
}

function Separator(props: SeparatorProps) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

function RadialSeparators(props: RadialSeparatorProps) {
  const turns = 1 / props.count;
  return _.range(props.count).map(index => (
    <Separator turns={index * turns} key={index} style={props.style} />
  ));
}

export default RadialSeparators;
