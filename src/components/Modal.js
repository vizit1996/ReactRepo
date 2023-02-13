function Modal(props) {

    function CancelHandler(){
        props.onCancels();
    }
    function ConfirmHandler(){
        props.onConfirm();
    }

  return(
    <div className="modal">
        <button className="btn btn--alt" onClick={CancelHandler}> cancel </button>
        <button className="btn" onClick={ConfirmHandler}>Delete </button>
    </div>
    );
}

export default Modal;
