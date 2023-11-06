import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterReducer";
import AddRedux from "./AddRedux";
import ToDoList from "./todos/ToDoList";

const ReduxExamples = () => {
  return (
      <div className={'mt-4'}>
        <h2>Redux Examples</h2>
        <HelloRedux/>
        <CounterRedux/>
        <AddRedux/>
        <ToDoList/>
      </div>
  );
};

export default ReduxExamples;