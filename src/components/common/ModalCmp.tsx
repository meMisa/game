// node modules
import React from "react";
import ReactDOM from "react-dom";
// assets
import Icon_Close from "assets/images/icon-close.svg";
// constants
import { CLOSE } from "constants/texts";
//styles
import "styles/modal.css";

interface Props {
  isShowing: boolean;
  hide: any;
  title: string;
  children: React.ReactNode | JSX.Element[] | JSX.Element;
}

const Modal = ({ isShowing, hide, title, children }: Props) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            // tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="display-flex justify-content-space-between font-weight-bold modal-header">
                <p>{title}</p>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <img src={Icon_Close} alt={CLOSE} />
                </button>
              </div>
              <div className="modal-body">{children}</div>
              <div className="margin-auto modal-close-button-wrapper">
                <button
                  type="button"
                  className="modal-close-button-mobile"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <img src={Icon_Close} alt={CLOSE} />
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
