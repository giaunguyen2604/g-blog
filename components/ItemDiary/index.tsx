import React from 'react'
import { ItemDiaryContainer } from './Styled'
import { ItemDiaryProp } from '../../interfaces'

const ItemDiary: React.FC<ItemDiaryProp>= ({ diary }) => {
  return (
    <ItemDiaryContainer color={diary.color}>
      <h3 className="title-diary">{ diary.title }</h3>
    </ItemDiaryContainer>
  )
}

export default ItemDiary