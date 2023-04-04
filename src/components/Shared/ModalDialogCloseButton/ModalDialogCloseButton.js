
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Button from "../Button/Button";

import "./ModalDialogCloseButton.css";

export default function ModalDialogCloseButton({clickHandler}){
    return(<Button onClickHandler={clickHandler}><FontAwesomeIcon icon={faXmark} /></Button>);
}