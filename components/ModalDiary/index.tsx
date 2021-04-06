import React from 'react'
import { MdModal, MdContent, MdOverlay } from './Styled'
import toogleModalViewDiary from '../../utils/toggleModalViewDiary'

interface ModalProps {
  title?: String,
  createAt?: String,
  updateAt?: String,
  content?: String
}

const ModalDiary: React.FC<ModalProps> = ({ title, createAt, updateAt, content }) => {
  return (
    <div>
      <MdModal className="md-modal md-effect-1" id="modal-1">
        <MdContent className="md-content">
          <h3>{title}</h3>
          <p>Create at: {createAt}, Update at: {updateAt}</p>
          <div>
            {content}
            <button className="md-close" id="md-close" onClick={toogleModalViewDiary}>Close</button>
          </div>
        </MdContent>
      </MdModal>
      <MdOverlay className="md-overlay" />
    </div>

  )
}

export default ModalDiary;