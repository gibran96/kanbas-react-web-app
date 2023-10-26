import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";
import {useSelector} from "react-redux";

function Assignment3() {
  const {todos} = useSelector(state => state.todoReducer);
  console.log(todos);
  return (
      <div>
        <h1>Assignment 3</h1>
        <ul className="list-group">
          {todos.map((todo) => (
              <li className="list-group-item" key={todo.id}>
                {todo.title}
              </li>
          ))}
        </ul>
        <JavaScript/>
        <PathParameters/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <TodoList/>
      </div>
  );
}

export default Assignment3;