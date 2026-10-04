import React from 'react'
import { createPortal } from 'react-dom'
import "../template/ErrorModel.css"

function ErrorModel(prorps) {
  return createPortal(
  
        <div className="modal-backdrop">
            <div className="modal">
                <h3>{prorps.title}</h3>
                <div>{prorps.content}</div>

                <button type='button' onClick={prorps.onClose}>Okay</button>
            </div>
        </div>,

   document.getElementById("modal-root")
  )
}

export default ErrorModel