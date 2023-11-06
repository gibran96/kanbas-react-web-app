import {useState} from "react";

function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  }
  const deleteElement = (index) => {
    setArray(array.filter((element, i) => i !== index));
  }
  return (
      <div>
        <h2>Array State Variable</h2>
        <button className={'btn btn-success'} onClick={addElement}>Add Element
        </button>
        <ul className={'list-group mt-2'}>
          {array.map((element, index) => (
              <li key={index} className={'list-group-item'}>
                {element}
                <button onClick={() => deleteElement(index)}
                        className={'btn btn-danger float-end'}>Delete
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default ArrayStateVariable;