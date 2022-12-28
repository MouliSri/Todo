import React, { useState } from "react";

export default function List(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.value}</li>
    </div>
  );
}
