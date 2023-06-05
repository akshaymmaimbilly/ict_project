import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app root element for accessibility

const Bookdetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const book = {
    title: 'The Book Title',
    price: 19.99,
    description: 'This is a book description.',
    rented: true
  };

  return (
    <div>
      <button onClick={openModal}>View Book Details</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h1>{book.title}</h1>
        <p>Price: ${book.price}</p>
        <p>Description: {book.description}</p>
        <p>Rented: {book.rented ? 'Yes' : 'No'}</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Bookdetails;
