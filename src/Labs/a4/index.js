import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataonEvent";
import PassingFunction from "./PassingFunction";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StrinStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

function Assignment4() {
  function SayHello() {
    alert("Hello World!");
  }

  return (
      <div>
        <h1>Assignment 4</h1>
        <Add a={1} b={2}/>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunction theFunction={SayHello}/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <ReduxExamples/>
      </div>
  );
}

export default Assignment4;
