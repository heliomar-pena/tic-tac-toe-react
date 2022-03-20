import "./Modal.css";

const Modal = ({ children, animation }) => {
    return (
        <div className="modal__container">
            <div className={`modal ${animation}`}>
                { children }
            </div>
        </div>
    );
}

export default Modal;