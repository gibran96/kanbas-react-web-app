import ToDoForm from "./ToDoForm";
import TodoItem from "./TodoItem";
import {useSelector} from "react-redux";

function ToDoList() {
  const todos = useSelector(state => state.todoReducer.todos);
  return (
      <div>
        <h2>Todo List</h2>
        <ul className="list-group">
          <ToDoForm/>
          {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo}/>
          ))}
        </ul>
      </div>
  );
}

export default ToDoList;