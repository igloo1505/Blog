import React from "react";

const ConfirmDeleteModal = (props) => {
  const actuallyDelete = () => {
    let filtered = props.content.filter((c) => c !== props.toDelete);
    props.setContent(filtered);
  };
  return (
    <div className="modal modal-fixed-footer" id="confirmDeleteModal">
      <div className="modal-content">
        <h4>Remove Paragraph?</h4>
        <p>{props.toDelete}</p>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-green btn-flat"
          onClick={() => actuallyDelete()}
        >
          Delete
        </a>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
