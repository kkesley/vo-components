import React, { useState } from 'react'
import Modal from '../src/Modal'

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            bottom: '20%',
            left: '20%',
            right: '20%',
            backgroundColor: 'white',
          }}
        >
          <p>hello</p>
        </div>
      </Modal>
      <button onClick={() => setIsOpen(true)} className="button">
        Open Modal
      </button>
    </div>
  )
}

export const WithScrollableBody = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Modal isBodyScrollable isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{
            position: 'absolute',
            top: '20%',
            bottom: '20%',
            left: '20%',
            right: '20%',
            backgroundColor: 'white',
          }}
        >
          <p>hello</p>
        </div>
      </Modal>
      <button onClick={() => setIsOpen(true)} className="button">
        Open Modal
      </button>
      <div>
        {new Array(50).fill(null).map((_, index) => (
          <p key={`modal-content-${index}`}>Scroll while modal is opened</p>
        ))}
      </div>
    </div>
  )
}
