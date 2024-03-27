import React from "react";

function NoMoreMovies({ show, onClose }) {
  return (
    <div
      className="modal-wrapper"
      style={{
        position: 'fixed',
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // zIndex: "200",
      }}
    >
      <div
        className={`modal fade${show ? " show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{
          display: show ? "block" : "none",
          backgroundColor: "rgba(123, 97, 255, 1)",
          padding: "20px",
          justifyContent: "left",
          alignItems: "center",
          maxWidth: "530px",
          borderRadius:"10px",
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div
            className="modal-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="modal-header"></div>
            <div
              className="modal-body"
              style={{ fontSize: "25px", paddingBottom: "30px" }}
            >
              <p>
                No more movies to load
              </p>
            </div>
            <div className="modal-footer" style={{ justifyContent: "center" }}>
              <button
                type="button"
                className="btn btn-secondary rounded-pill"
                onClick={onClose}
                style={{
                  color: "rgba(123, 97, 255, 1)",
                  padding: "15px, 50px;",
                  width: "120px",
                  height:"45px",
                  cursor: 'pointer',
                  borderRadius:"10px",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMoreMovies;
