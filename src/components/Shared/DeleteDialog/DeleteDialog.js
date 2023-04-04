import Button from "../Button/Button";
import ModalDialogCloseButton from "../ModalDialogCloseButton/ModalDialogCloseButton";

import "./DeleteDialog.css";

export default function DeleteDialog({
    productName,
    resultHandler
}) {

    function closeHandler(){
        resultHandler(false);
    }

    function deleteHandler(){
        resultHandler(true);
    }
    
  return (
    <div className="dialog_holder">
      <section className="dialog">
        <header className="dialog_header">
          <h2 className="dialog_title">Delete Confirmation</h2>
          <ModalDialogCloseButton clickHandler={closeHandler} />
        </header>
        <main className="dialog_body">
          <p>Are you sure you want to delete {productName}?</p>
        </main>
        <footer className="dialog_actions">
          <Button onClickHandler={closeHandler} >Close</Button>
          <Button onClickHandler={deleteHandler} >Delete</Button>
        </footer>
      </section>
    </div>
  );
}
