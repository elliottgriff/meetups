function Modal(props) {
  const cancelHandler = () => {
    props.onCancel();
  };

  const confirmHandler = () => {
    props.onConfirm();
  };

  return (
    <div className="modal">
      <p>are you sure?</p>
      <button className="btn" onClick={cancelHandler}>
        cancel
      </button>
      <button className="btn btn--alt" onClick={confirmHandler}>
        confirm
      </button>
    </div>
  );
}

export default Modal;
