import {useDispatch} from "react-redux";
import {deleteTodo, setTodo} from "./todoReducer";

function TodoItem({todo}) {
  const dispatch = useDispatch();
  return (
      <li key={todo.id} className="list-group-item">
        {todo.title}
        <button className={'btn btn-danger mx-2'}
                onClick={() => dispatch(deleteTodo(todo.id))}>
          Delete
        </button>
        <button className={'btn btn-warning me-2'}
                onClick={() => dispatch(setTodo(todo.title))}>
          Edit
        </button>
      </li>
  );
}

export default TodoItem;