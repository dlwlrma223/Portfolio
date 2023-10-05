import React from "react";

export default function Choose(props) {
  return (
    <h1
      style={{
        backgroundColor: "red",
        borderBottom: "3px solid black",
        textAlign: "center",
        margin: "0",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.mainTitle}
      {props.subTitle}
    </h1>
    // {/*inline CSS做法*/}
  );
}
