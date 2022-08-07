import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description,githublink,website, category, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img id="large"
          src={require(`../../assets/large/${category}/${index}.jpeg`)}
          alt="current category"
        />
        <p>{description}</p>
        <p>{githublink}</p>
        <p>{website}</p>

        <button type="button" onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
