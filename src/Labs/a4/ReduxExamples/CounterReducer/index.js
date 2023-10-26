import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterReducer";

function CounterRedux() {
  const {count} = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  return (
      <div>
        <h2>Counter Redux</h2>
        <h3>Count: {count}</h3>
        <button className={'btn btn-success me-2'}
                onClick={() => dispatch(increment())}>Increment
        </button>
        <button className={'btn btn-danger'}
                onClick={() => dispatch(decrement())}>Decrement
        </button>
      </div>
  );
}

export default CounterRedux;