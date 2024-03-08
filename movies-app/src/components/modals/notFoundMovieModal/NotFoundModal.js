import React from "react";

function NotFoundModal({ show, handleClose }) {
  return (
    <div
      className={`modal fade${show ? " show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{
        display: show ? "block" : "none",
        backgroundColor: "rgba(123, 97, 255, 1)",
        padding: "50px",
        marginBottom: "30px",
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        width:" 50%",
        height: "50%",
        // margin: "0 auto"
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div
            className="modal-body"
            style={{ fontSize: "30px", paddingBottom: "30px" }}
          >
            <p style={{ fontSize: "30px", color: "white" }}>
              {" "}
              Try another title
            </p>
          </div>
          <div className="modal-footer" style={{ justifyContent: "center" }}>
            <button
              type="button"
              className="btn btn-secondary rounded-pill"
              onClick={handleClose}
              style={{
                width: "40%",
                color: "rgba(123, 97, 255, 1)",
                padding: "10px",
                marginBottom: "30px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundModal;
