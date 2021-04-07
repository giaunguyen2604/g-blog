import React, { useState } from 'react'
import {
  TooplateWrapper, TooplateSidebar, SiteTitle,
  TooplateMenu, Twitter, TooplateMain, GlobalStyle, ListDiaries
} from './Styled'
import ItemDiary from '../../components/ItemDiary'
import ModalDiary from '../../components/ModalDiary'
import toogleModalViewDiary from '../../utils/toggleModalViewDiary'
import { DiaryItem } from '../../interfaces'


const Diary: React.FC = () => {
  
  const [currentDiary, setCurrentDiary] = useState<DiaryItem>({} as DiaryItem)
  const tempListDiaries: DiaryItem[] = [
    {
      title: 'How do you feel today?',
      createAt: '2020/04/05 17:00',
      updateAt: '2020/04/06 07:00',
      content: 'Hello, nice to meet you!',
      color: '#f8f7f7'
    },
    {
      title: 'HELLO!',
      createAt: '2020/04/06 20:00',
      updateAt: '2020/04/07 07:00',
      content: 'Hello, nice to meet you!',
      color: '#f6faf5'
    },
    {
      title: 'How are you?',
      createAt: '2020/04/05 11:00',
      updateAt: '2020/04/06 09:00',
      content: 'Hello, nice to meet you!',
      color: '#f5f6f8'
    },
    {
      title: 'Good morning!',
      createAt: '2020/04/05 18:00',
      updateAt: '2020/04/06 00:00',
      content: 'Hello, nice to meet you!',
      color: '#f4f7f8'
    }
  ]

  const chooseDiary = (item) => {
    setCurrentDiary(item)
    toogleModalViewDiary()
  }

  return (
    <TooplateWrapper id="tooplate_wrapper">
      <GlobalStyle />
      <TooplateSidebar id="tooplate_sidebar">
        <SiteTitle id="site_title"><a href="#">Diary</a></SiteTitle>
        <TooplateMenu id="tooplate_menu">
          <ul>
            <li><a className="all-diaries"><span />All Diaries</a></li>
            <li><a className="categories-label"><span />Categories</a></li>
            <li><a className="back-home"><span />Back Home</a></li>
          </ul>
          <div className="cleaner" />
        </TooplateMenu> {/* END of */}
        <Twitter id="twitter">
          <h3>Twitter</h3>
        </Twitter>
      </TooplateSidebar>
      <TooplateMain id="tooplate_main">
        <h2>LIST DIARIES</h2>
        <ListDiaries>
          {
            tempListDiaries.map( (item,index) => {
              return(
                <div onClick={() => chooseDiary(item)} style={{cursor:'pointer'}}>
                <ItemDiary key={index} diary={item}/>
                </div>
              )
            })
          }
        </ListDiaries>
      </TooplateMain>
      <div className="cleaner" />
      <ModalDiary diary={currentDiary}/>
    </TooplateWrapper>

  )
}

export default Diary