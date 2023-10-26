import {useDispatch, useSelector} from "react-redux";
import {addTodo, setTodo, updateTodo} from "./todoReducer";

function ToDoForm() {
  const {todo} = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  return (
      <li className="list-group-item">
        <input
            value={todo.title}
            onChange={(e) =>
                dispatch(setTodo({
                  ...todo,
                  title: e.target.value,
                }))
            }
        />
        <button className={'btn btn-success mx-2'}
                onClick={() => dispatch(addTodo(todo))}>Add
        </button>
        <button className={'btn btn-primary me-2'}
                onClick={() => dispatch(updateTodo(todo))}>
          Update
        </button>
      </li>
  );
}

export default ToDoForm;