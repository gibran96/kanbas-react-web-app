import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {add} from "./addReducer";

function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const {sum} = useSelector((state) => state.addReducer);
  const dispatch = useDispatch();
  return (
      <div className={'w-25'}>
        <h1>Add Redux</h1>
        <h2>
          {a} + {b} = {sum}
        </h2>
        <input
            type="number"
            className={'form-control mb-2'}
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
        />
        <input
            type="number"
            className={'form-control mb-2'}
            value={b}
            onChange={(e) => setB(parseInt(e.target.value))}
        />
        <button
            onClick={() => dispatch(add({a, b}))}
            className={'btn btn-primary'}
        >Add Redux
        </button>
      </div>
  );
}

export default AddRedux;