import { useState } from "react";
import Backdrops from "./Backdrops";
import Modal from "./Modal";

function Todo(props) {
    const [modelIsOpen , setModelIsOpen] = useState(false);

    function DeleteHandler() {
        setModelIsOpen(true);
    }

    function CancelHandler(){
        setModelIsOpen(false);
    }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="action">
        <button className="btn" onClick={DeleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <Modal onConfirm={CancelHandler} onCancels={CancelHandler}/> }
      {modelIsOpen && <Backdrops onCancel={CancelHandler}/> }
    </div>
  );
}

export default Todo;
