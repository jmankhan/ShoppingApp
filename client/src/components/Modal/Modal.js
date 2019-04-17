import React from 'react';

const Modal = (props) => {
    // The gray background
    const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
    };
    
    // The modal "window"
    const modalStyle = {
        backgroundColor: '#fff',
        borderRadius: 5,
        maxWidth: 500,
        minHeight: 300,
        margin: '0 auto',
        padding: 30
    };
      
    return(
        <>
        {props && props.show && 
            <div className="backdrop" style={{backdropStyle}}>
                <div className="modal" style={{modalStyle}}>
                    {props.children}
                    <div className="footer">
                        <button onClick={props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>}
        </>
  )
}

export default Modal;
