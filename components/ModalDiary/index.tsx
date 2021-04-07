import React from 'react'
import { MdModal, MdContent, MdOverlay } from './Styled'
import toogleModalViewDiary from '../../utils/toggleModalViewDiary'
import { ItemDiaryProp } from '../../interfaces'

const ModalDiary: React.FC<ItemDiaryProp> = ({ diary }) => {
  return (
    <div>
      <MdModal className="md-modal md-effect-1" id="modal-1">
        <MdContent className="md-content">
          <h3>{diary.title}</h3>
          <p>Create at: {diary.createAt}, Update at: {diary.updateAt}</p>
          <div>
            {diary.content}
            <button className="md-close" id="md-close" onClick={toogleModalViewDiary}>Close</button>
          </div>
        </MdContent>
      </MdModal>
      <MdOverlay className="md-overlay" />
    </div>

  )
}

export default ModalDiary;