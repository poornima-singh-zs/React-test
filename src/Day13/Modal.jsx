/* eslint-disable react/prop-types */
import "./Modal.css"

const Modal=({isModalOpen,openModal,closeModal})=>{
    return(
    <div>
      <button className="button" onClick={openModal}>Open Modal</button>

     {isModalOpen && (
      <>
       <div className="modal show ">
          <h2>Modal Heading</h2>
          <p className="modal-content">This is the modal content. You can add more text or elements here.</p>
          <button className="button" onClick={closeModal}>Close</button>
        </div>
        </>
     
    )}
    </div>
    )
}

export default Modal