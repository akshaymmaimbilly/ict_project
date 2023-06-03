import  { useState } from 'react';
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




Modal.setAppElement('#root'); // Set the app root element for accessibility

const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    background: '#fff'
  }
};

const BookDetailsPage = () => {
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
      >
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
