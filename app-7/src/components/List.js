import React from "react";
import ToDo from "../components/Todo";

export default function List(props) {
  let list = props.tasks.map((element, index) => {
    return <ToDo key={index} task={element} />;
  });
  return <div>{list}</div>;
}
