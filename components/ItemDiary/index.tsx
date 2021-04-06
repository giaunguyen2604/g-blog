import React from 'react'
import { ItemDiaryContainer } from './Styled'

interface ItemDiaryProp {
  title: string,
  color: string
}

const ItemDiary: React.FC<ItemDiaryProp>= ({ title, color }) => {
  return (
    <ItemDiaryContainer color={color}>
      <h3 className="title-diary">{ title }</h3>
    </ItemDiaryContainer>
  )
}

export default ItemDiary